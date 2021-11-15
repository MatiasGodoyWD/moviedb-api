import { getRandomMovie } from "./data.js";

const Movie = async () => {
  let selectedMovie = await getRandomMovie();
  const backdrop_baseUrl = "http://image.tmdb.org/t/p/w1280";
  const poster_baseUrl = "http://image.tmdb.org/t/p/w342";
  return `
  <img class="poster__img" src="${poster_baseUrl}${
    selectedMovie.poster_path
  }"></img>
  <div class='movie__info'>
  <h1 class="title">${selectedMovie.original_title}</h1>
  <p class="vote__average"> ${selectedMovie.vote_average * 10}</p>
  <p class="release__date">${selectedMovie.release_date.slice(
    8,
    10
  )} - ${selectedMovie.release_date.slice(
    5,
    7
  )} - ${selectedMovie.release_date.slice(0, 4)}</p>
  <p class="overview">${selectedMovie.overview}</p>
  </div>`;
};

const renderizeRandomMovie = async () => {
  const container = document.querySelector(".container");

  container.innerHTML = await Movie();
};

export { renderizeRandomMovie };
