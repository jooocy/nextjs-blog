import { useRouter } from "next/router";

export default function Movie_detail({ results }) {
  //   const router = useRouter();
  //   console.log(router);
  console.log(results);
  return <div>{results.original_title}</div>;
}

export async function getServerSideProps({ query }) {
  console.log(query);
  const results = await (
    await fetch(
      `https://api.themoviedb.org/3/movie/${query.id}?api_key=e9c527ad34d2acd583886bffde9aac30&language=en-US`
    )
  ).json();
  console.log("serverSideRender");
  return {
    props: {
      results,
    },
  };
}
