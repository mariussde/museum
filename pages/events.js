import Head from "next/head";
import Nav from "../components/Nav";
import Library from "../components/Library/Library";
import Footer from "../components/Footer";

export default function EventsPage() {
  return (
    <>
      <Head>
        <title>Biblioteca - The Metropolitan Museum of Art</title>
        <meta
          name="description"
          content="Explore our library collection"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <Library />
      <Footer />
    </>
  );
}

