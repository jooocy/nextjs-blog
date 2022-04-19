export default function Movie_home({ movies }) {
  return (
    <>
      <Seo title="Movie" />
      <h1>Movie Home</h1>
    </>
  );
}
// export async function getServerSideProps() {
//   const { movies } = await (await fetch("http://localhost:3000/movie")).json;
//   console.log(movies);
//   return { props: { movies } };
// }
