import axios from "axios";

const api = axios.create({
  baseURL: `${process.env.API_BASE_URL}`,
  headers: {
    api_key: `${process.env.API_KEY}`,
    language: "pt-BR",
    region: "BR",
  },
});

const getPopularMovies = async () => {
  const returnApi = await api
    .get(`/movie/popular`, { headers: { page: "1" } })
    .then((response) => response)
    .then((data) => data.results)
    .catch((error) => console.log(error));
  return returnApi;
};

const getPlayingMovies = async () => {
  const returnApi = await api
    .get(`/movie/now_playing`, { headers: { page: "1" } })
    .then((response) => response)
    .then((data) => data.results)
    .catch((error) => console.log(error));
  return returnApi;
};

const getRecomendationsMovies = async (movie_id) => {
  const returnApi = await api
    .get(`/movie/${movie_id}/recommendations`, { headers: { page: "1" } })
    .then((response) => response)
    .then((data) => data.results)
    .catch((error) => console.log(error));
  return returnApi;
};

const getTopMovies = async () => {
  const returnApi = await api
    .get(`/movie/top_rated`, { headers: { page: "1" } })
    .then((response) => response)
    .then((data) => data.results)
    .catch((error) => console.log(error));
  return returnApi;
};

export {
  getPopularMovies,
  getPlayingMovies,
  getRecomendationsMovies,
  getTopMovies,
};
