const key = "4bf37a006026ff5c85b0ad03ea399347";

const generateRandomNumber = (min, max) =>
  Math.floor(Math.random() * (max + 1 - min)) + min;

const getRandomPopularElement = async (type = "movie") => {
  let pageNumber = generateRandomNumber(1, 25);
  let movieIndex = generateRandomNumber(0, 20);

  const response = await fetch(
    `https://api.themoviedb.org/3/${type}/popular?api_key=${key}&language=es-ES&page=${pageNumber}`
  );
  const data = await response.json();

  return data.results[movieIndex];
};

export { getRandomPopularElement };
