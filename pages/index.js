import Seo from "../components/Seo";
export default function Home() {
  return (
    <>
      <Seo title="HOME" />
      <h1>Home</h1>
    </>
  );
}

export async function getServerSideProps() {
  const { home } = await (await fetch("http://localhost:3000")).json;
  console.log(home);
  return { props: { home } };
}
