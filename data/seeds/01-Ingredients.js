exports.seed = function (knex) {
  return knex("ingredients")
    .truncate()
    .then(function () {
      return knex("ingredients").insert([
        { ingredient_id: 1, ingredient: "Water", ingredient_amount: "1 cup" },
        { ingredient_id: 2, ingredient: "Butter", ingredient_amount: "1 gram" },
        { ingredient_id: 3, ingredient: "Salt", ingredient_amount: "1 grain" },
      ]);
    });
};
