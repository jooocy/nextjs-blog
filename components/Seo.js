import Head from "next/head";

export default function Seo({ title }) {
  console.log("hihi");
  return (
    <Head>
      <title>{title}</title>
    </Head>
  );
}
