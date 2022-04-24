import Seo from "../../components/Seo";
export default function Movie_home({ results }) {
  return (
    <>
      <Seo title="Movie" />
      <h1>Movie Home</h1>
      <div>{results[0].title}</div>
      {results?.map((movie) => (
        <div>{movie.title}</div>
      ))}
    </>
  );
}

export async function getServerSideProps() {
  const { results } = await (
    await fetch(`http://localhost:3000/movies`)
  ).json();

  return {
    props: {
      results,
    },
  };
}
