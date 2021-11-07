const cargarPeliculas = async () => {
  let data = await fetch(
    "https://api.themoviedb.org/3/movie/550?api_key=4bf37a006026ff5c85b0ad03ea399347"
  );
  let response = await data.json();
  console.log(response.genres[0].name);
  return response;
};

cargarPeliculas();
