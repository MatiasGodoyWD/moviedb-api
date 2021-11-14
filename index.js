import * as data from "./data.js";

const main = () => {
  console.log("App is online");

  data.getRandom("movie");
  data.getRandom("tv");
};

main();
