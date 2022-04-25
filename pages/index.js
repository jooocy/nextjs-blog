import Seo from "../components/Seo";

export default function Home() {
  console.log("home");
  return (
    <>
      <Seo title="Home" />
      <h1>Homeeeee</h1>
      <h2>asdnfjasdnfj</h2>
    </>
  );
}

// export async function getServerSideProps() {
// const { home } = await (await fetch("http://localhost:3000")).json;
// console.log(home);
// return { props: { home } };
// }

// https://nextjs.org/docs/api-routes/introduction
// import Seo from "../components/Seo";
//       <Seo title="HOME" />
