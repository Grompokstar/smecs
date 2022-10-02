import 'styles/rsuite/styles.css'
import 'styles/all.scss'
import type { AppProps } from 'next/app'
import "@fontsource/zilla-slab/latin-300.css"
import "@fontsource/zilla-slab/latin-400.css"
import "@fontsource/zilla-slab/latin-600.css"
import "@fontsource/zilla-slab/latin-700.css"
import "@fontsource/public-sans/latin-300.css"
import "@fontsource/public-sans/latin-400.css"
import "@fontsource/public-sans/latin-700.css"

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
