import Head from "next/head";
import Nav from "../components/Nav";
import Collection from "../components/Collection/Collection";
import Footer from "../components/Footer";

export default function ExhibitionPage() {
  return (
    <>
      <Head>
        <title>Colección - The Metropolitan Museum of Art</title>
        <meta
          name="description"
          content="Explore our collection of artworks"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <Collection />
      <Footer />
    </>
  );
}

