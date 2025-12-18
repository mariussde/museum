import '../styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* Open Graph / Facebook / WhatsApp */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Le Femme Forgée - Museo de Arte" />
        <meta property="og:description" content="Bienvenido al Museo de Arte Le Femme Forgée" />
        <meta property="og:image" content="/images/upv-1.jpg" />
        <meta property="og:url" content="https://your-domain.com" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Le Femme Forgée - Museo de Arte" />
        <meta name="twitter:description" content="Bienvenido al Museo de Arte Le Femme Forgée" />
        <meta name="twitter:image" content="/images/upv-1.jpg" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
