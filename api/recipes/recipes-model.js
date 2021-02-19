const db = require("../../data/db-config.js");

const getRecipes = () => {
  return db("recipes");
};

const getShoppingList = () => {};

const getInstructions = () => {};

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions,
};
