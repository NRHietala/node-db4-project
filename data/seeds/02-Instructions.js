exports.seed = function (knex) {
  return knex("instructions")
    .truncate()
    .then(function () {
      return knex("instructions").insert([
        { instruction_id: 1, instruction_task: "Heat to 5000 degrees" },
        { instruction_id: 2, instruction_task: "Smash violently" },
        { instruction_id: 3, instruction_task: "Gently caress" },
      ]);
    });
};
