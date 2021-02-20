exports.seed = function (knex) {
  return knex("ingredients")
    .truncate()
    .then(function () {
      return knex("ingredients").insert([
        {
          ingredient_id: 1,
          ingredient_name: "Water",
          ingredient_amount: "1 cup",
        },
        {
          ingredient_id: 2,
          ingredient_name: "Butter",
          ingredient_amount: "1 gram",
        },
        {
          ingredient_id: 3,
          ingredient_name: "Salt",
          ingredient_amount: "1 grain",
        },
      ]);
    });
};
