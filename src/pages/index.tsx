import Head from "next/head";
import ProductList from "@containers/ProductList";

export default function Home() {
  return (
    <>
      <Head>
        <title>Yard Sale</title>
        <meta name="description" content="e-commerce page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <>
        <ProductList />
      </>
    </>
  );
}
