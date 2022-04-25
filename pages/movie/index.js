import Seo from "../../components/Seo";
import Link from "next/link";
import { useRouter } from "next/router";
export default function Movie_home({ results }) {
  const router = useRouter();
  return (
    <>
      <Seo title="Movie" />
      <h1>Movie Home</h1>
      {results?.map((movie) => (
        <Link
          href={{
            pathname: `/movie/[id].js`,
            query: { eee: movie.id },
          }}
          as={`/movie/${movie.id}`}
          key={movie.id}
        >
          <h3>
            <a>{movie.title}</a>
          </h3>
        </Link>
        // <button
        //   key={movie.id}
        //   onClick={() => router.push(`/movie/${movie.id}`)}
        // >
        //   {movie.title}
        // </button>
      ))}
    </>
  );
}

export async function getServerSideProps() {
  const { results } = await (
    await fetch(`http://localhost:3000/movies`)
  ).json();
  console.log("serverSideRender");

  return {
    props: {
      results,
    },
  };
}
