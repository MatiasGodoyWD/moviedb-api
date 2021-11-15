import { showRandomElement } from "./visuals.js";
import { getRandomPopularElement } from "./data.js";

const main = () => {
  console.log("App is online");
  // showRandomElement("tv");
  // showRandomElement("movie");
  getRandomPopularElement("tv");
};

main();
