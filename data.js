const key = "4bf37a006026ff5c85b0ad03ea399347";

const getLatest = async (type) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/${type}/latest?api_key=${key}&language=es-Es`
  );
  const data = await response.json();

  return data.id;
};

const getRandom = async (type) => {
  let container = document.querySelector(".container");
  const max_number = await getLatest(type);
  let random_number = generateRandomNumber(0, max_number);
  let response = await fetch(
    `https://api.themoviedb.org/3/${type}/${random_number}?api_key=${key}&language=en-US`
  );
  if (response.status !== 200) {
    while (response.status !== 200) {
      random_number = generateRandomNumber(0, max_number);
      response = await fetch(
        `https://api.themoviedb.org/3/${type}/${random_number}?api_key=${key}&language=en-US`
      );
    }
  }
  const data = await response.json();
  console.log(data);
  if (data.poster_path !== null) {
    let img = document.createElement("img");
    img.src = `https://image.tmdb.org/t/p/w500/${data.poster_path}`;
    container.appendChild(img);
  } else {
    let text = document.createElement("h2");
    text.textContent = "No hay foto para esta peli/serie";
    container.appendChild(text);
  }
};

const generateRandomNumber = (min, max) =>
  Math.floor(Math.random() * (max + 1 - min)) + min;

export { generateRandomNumber, getLatest, getRandom };
