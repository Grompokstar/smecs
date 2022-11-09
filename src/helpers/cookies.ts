export function setCookie(name: string, value: any, days?: number, domain?: string) {
  try {
    let expires;

    if (days) {
      let date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      expires = "; expires=" + date.toUTCString();
    } else {
      expires = "";
    }

    const _name = encodeURIComponent(name);
    const _value = encodeURIComponent(value);
    const _domain = domain ? `domain=${domain}; ` : '';

    document.cookie = `${_name}=${_value}${expires}; ${_domain}path=/`;
  } catch(e) {
    console.log(e);
  }
}

export function getCookie(name: string, source?: string) {
  try {
    const cookieCourse = source || document.cookie
    let nameEQ = encodeURIComponent(name) + "=";
    let ca = cookieCourse.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) === 0) return decodeURIComponent(c.substring(nameEQ.length, c.length));
    }

    return null;
  } catch(e) {
    
  }
}

export function eraseCookie(name: string, domain?: string) {
  setCookie(name, "", -1, domain);
};