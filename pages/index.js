import Head from 'next/head'
import Layout from '../components/Home/Layout'

export default function Home() {
  return (
    <>
      <Head>
        <title>Inicio - Museo de Arte</title>
        <meta name="description" content="Bienvenido al Museo de Arte" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout />
    </>
  )
}
