import { getRandomPopularElement } from "./data.js";

const showRandomElement = async (type) => {
  let selectedElement = await getRandomPopularElement(type);

  console.log(selectedElement);
};

export { showRandomElement };
