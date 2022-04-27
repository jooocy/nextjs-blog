import { useRouter } from "next/router";

export default function Movie_detail({ results }) {
  //   const router = useRouter();
  //   console.log(router);
  // console.log(results);
  return <div>{results.original_title}</div>;
}

export async function getServerSideProps({ query }) {
  console.log(query.id);
  const results = await (
    await fetch(`http://localhost:3000/movies/${query.id}`)
  ).json();
  console.log(results);
  return {
    props: {
      results,
    },
  };
}
