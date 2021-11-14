const key = "4bf37a006026ff5c85b0ad03ea399347";

const getLatest = async (type) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/${type}/latest?api_key=${key}&language=es-Es`
  );
  const data = await response.json();

  return data.id;
};

const getRandom = async (type) => {
  const max_number = await getLatest(type);
  const random_number = generateRandomNumber(0, max_number);
  const response = await fetch(
    `https://api.themoviedb.org/3/${type}/${random_number}?api_key=${key}&language=en-US`
  );
  const data = await response.json();
  console.log(data);
};

const generateRandomNumber = (min, max) =>
  Math.floor(Math.random() * (max + 1 - min)) + min;

export { generateRandomNumber, getLatest, getRandom };
