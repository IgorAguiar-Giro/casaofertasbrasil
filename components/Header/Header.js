import Head from "next/head";
import Navbar from "./Navbar";

export default function Head() {
  return (
    <>
      <Head>
        <title>Casa Ofertas Brasil</title>
        <meta name="description" content="Casa Ofertas Brasil webshop" />
        <meta name="keywords" content="Ecommerce, Casa Ofertas Brasil" />
        <meta
          property="og:title"
          content="Nextjs Casa Ofertas Brasil"
          key="pagetitle"
        />
      </Head>
      <Navbar />
    </>
  );
}
