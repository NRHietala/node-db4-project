exports.seed = function (knex) {
  return knex("recipes")
    .truncate()
    .then(function () {
      return knex("recipes").insert([
        { recipe_id: 1, recipe_name: "Hard-Boiled Egg" },
        { recipe_id: 2, recipe_name: "Instant Oatmeal" },
        { recipe_id: 3, recipe_name: "Macaroni and Cheese" },
        { recipe_id: 4, recipe_name: "Campbell's Soup" },
        { recipe_id: 5, recipe_name: "Toast" },
      ]);
    });
};
