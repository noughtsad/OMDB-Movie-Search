const API__KEY = "my-api";
const BASE_URL = "https://www.omdbapi.com/";

export const searchMovies = async (query) => {
  const response = await fetch(
    `${BASE_URL}?apikey=${API__KEY}&s=${encodeURIComponent(query)}`
  );
  const data = await response.json();
  return data.Search || [];
};
