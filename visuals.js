import { getRandomMovie, getMovieCredits } from "./data.js";
const backdrop_baseUrl = "http://image.tmdb.org/t/p/w1280";
const poster_baseUrl = "http://image.tmdb.org/t/p/w342";
const button = document.querySelector(".button");
const Movie = async () => {
  let selectedMovie = await getRandomMovie();
  let movieCredits = await getMovieCredits(selectedMovie.id);

  console.log(selectedMovie);
  console.log(movieCredits);

  return `
  <img class="poster__img" src="${poster_baseUrl}${
    selectedMovie.poster_path
  }"></img>
  <div class='movie__info'>
  <h1 class="title">${selectedMovie.title}</h1>
  <p class="vote__average"> <span class= 'subtitulo'>Popularidad: </span>${
    selectedMovie.vote_average * 10
  }%</p>
  <p class="release__date"><span class= 'subtitulo'>Fecha de estreno: </span>${selectedMovie.release_date.slice(
    8,
    10
  )}-${selectedMovie.release_date.slice(
    5,
    7
  )}-${selectedMovie.release_date.slice(0, 4)}</p>
  <h2 class="overview-title"> Detalles de la pelicula</h2>
  <p class="overview">${selectedMovie.overview}</p>
  </div>
  `;
};

const renderizeRandomMovie = async () => {
  const container = document.querySelector(".container");

  container.innerHTML = await Movie();
};

button.addEventListener("click", () => {
  renderizeRandomMovie();
});

export { renderizeRandomMovie };
