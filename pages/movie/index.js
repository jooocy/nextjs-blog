import Seo from "../../components/Seo";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

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
            // query: { eee: movie.id },
          }}
          as={`/movie/${movie.id}`}
          key={movie.id}
        >
          {/* // Link 안에는 하나의 child tag만 올수 있다. (error가 나왔을때 나오는 url을 보고 알았다.) */}
          <h3>
            <a>{movie.title}</a>
            <Image
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              width="100"
              height="150"
              // layout="responsive"
            />
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
  // console.log(results[0].vote_count);

  return {
    props: {
      results,
    },
  };
}
