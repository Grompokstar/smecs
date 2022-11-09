// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next';
import {API_URL, TOKEN_COOKIE_NAME}           from 'constants/global';
import {getCookie}                            from "helpers/cookies";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const {method, headers, body} = req;
  const url = `${API_URL}${req.url}`;
  const _headers = {...headers};
  const token = getCookie(TOKEN_COOKIE_NAME, req.headers['cookie'])

  delete _headers.host;
  delete _headers.origin;
  delete _headers.referer;

  _headers['Abp.TenantId'] = '1';

  if (token) {
    _headers.Authorization = `Bearer ${token}`;
  }

  const params: RequestInit = {
    method,
    headers: _headers as HeadersInit,
  };

  const contentType = req.headers['content-type'];

  if (['POST', 'PUT'].includes(method)) {
    if (contentType.includes('application/json')) {
      if (typeof body === 'object') {
        params.body = JSON.stringify(body);
      } else {
        params.body = body
      }
    }
  }

  const _res = await fetch(url, params);
  const _resHeaders = Object.fromEntries(_res.headers.entries());

  for (const header of Object.keys(_resHeaders)) {
    let value = _resHeaders[header];

    if (header === 'set-cookie') {
      value = _resHeaders[header].replace(/ HttpOnly/g, '');
    }

    res.setHeader(header, value);
  }

  res.statusCode = _res.status;
  let response = await _res.text();

  if (_res.status === 204) {
    res.removeHeader('content-length');
  }

  try {
    const _response = JSON.parse(response);
    res.end(JSON.stringify(_response));
  } catch (e) {
    res.end(response);
  }
}

export default handler;
