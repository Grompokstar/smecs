import 'styles/rsuite/styles.css'
import 'styles/all.scss'
import type { AppProps } from 'next/app'
import "@fontsource/zilla-slab"
import "@fontsource/public-sans"
import "@fontsource/public-sans/latin-300.css"

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
