import Head from "next/head";
import Navbar from "./Navbar";

export default function Header() {
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
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Navbar />
    </>
  );
}
