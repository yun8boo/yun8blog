import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '@/components/Layout/Layout'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <meta name="theme-color" content="#f69435" />
        <link rel="manifest" href="/manifest.webmanifest" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}
export default MyApp