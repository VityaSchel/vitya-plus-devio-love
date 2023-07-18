import '@/shared/styles/globals.scss'
import '@leenguyen/react-flip-clock-countdown/dist/index.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
