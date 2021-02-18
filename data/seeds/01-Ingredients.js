exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("ingredients")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("ingredients").insert([
        { ingredient_id: 1, Ingredient: "Water" },
        { ingredient_id: 2, Ingredient: "Butter" },
        { ingredient_id: 3, Ingredient: "Salt" },
      ]);
    });
};
