const MOVIE_API = process.env.MOVIE_API;

module.exports = {
  reactStricMode: true,
  async rewrites() {
    return [
      {
        source: `/movies`,
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${MOVIE_API}`,
      },
      {
        source: `/movies/:id`,
        destination: `https://api.themoviedb.org/3/movie/:id?api_key=${MOVIE_API}`,
      },
    ];
  },
  images: {
    domains: ["image.tmdb.org"], //https://image.tmdb.org/t/p/w500 로 했을때 안되었다.
  },
};
