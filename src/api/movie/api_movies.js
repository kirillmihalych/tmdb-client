import { BEARER_TOKEN } from "../keys";

const getRequestOptions = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: BEARER_TOKEN,
  },
};

async function getPopularMovieList() {
  const response = await fetch(
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
    getRequestOptions
  );
  const data = await response.json();
  return data;
}

async function getMovieDetailsById(movie_id) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movie_id}`,
    getRequestOptions
  );
  const data = await response.json();
  return data;
}

export { getPopularMovieList, getMovieDetailsById };
