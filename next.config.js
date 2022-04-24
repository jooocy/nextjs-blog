const MOVIE_API = process.env.MOVIE_API;

module.exports = {
  reactStricMode: true,
  async rewrites() {
    return [
      {
        source: `/movies`,
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${MOVIE_API}`,
      },
    ];
  },
};
