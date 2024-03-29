const key = "4bf37a006026ff5c85b0ad03ea399347";

const generateRandomNumber = (min, max) =>
  Math.floor(Math.random() * (max + 1 - min)) + min;

const getRandomMovie = async () => {
  try {
    let pageNumber = generateRandomNumber(1, 8);
    let movieIndex = generateRandomNumber(0, 19);
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=es-ES&page=${pageNumber}`
    );
    const data = await response.json();
    return data.results[movieIndex];
  } catch (e) {
    console.warn(e);
  }
};

const getMovieCredits = async (movieId) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${key}&language=en-US`
  );

  const data = await response.json();

  return data;
};
export { getRandomMovie, getMovieCredits };
