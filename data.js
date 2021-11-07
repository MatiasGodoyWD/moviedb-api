const key = "4bf37a006026ff5c85b0ad03ea399347";

const getLatestMovieId = async () => {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/latest?api_key=${key}&language=es-ES`
  );
  const response = await data.json();
  console.log(response.id);
  return response.id;
};

const getLatestSeriesId = async () => {
  const data = await fetch(
    `https://api.themoviedb.org/3/tv/latest?api_key=${key}&language=es-ES`
  );
  const response = await data.json();
  console.log(response.id);
  return response.id;
};

export { getLatestMovieId, getLatestSeriesId };
