const express = require("express");
const Recipe = require("./recipes-model.js");
const router = express.Router();

router.get("/", (req, res) => {
  Recipe.getRecipes()
    .then(recipe => {
      res.json(recipe);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get schemes" });
    });
});

module.exports = router;
