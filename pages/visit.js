import Head from "next/head";
import Nav from "../components/Nav";
import Visit from "../components/Visit/Visit";
import Footer from "../components/Footer";

export default function VisitPage() {
  return (
    <>
      <Head>
        <title>Visita - Le Femme Forgée</title>
        <meta
          name="description"
          content="Plan your visit to Le Femme Forgée"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <Visit />
      <Footer />
    </>
  );
}

