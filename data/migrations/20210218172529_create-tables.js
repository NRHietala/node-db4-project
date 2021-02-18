exports.up = function (knex) {
  return knex.schema
    .createTable("guides", table => {
      table.increments("guide_id");
      table
        .integer("ingredient_id")
        .references("ingredient_id")
        .inTable("ingredients");
      table
        .integer("instruction_id")
        .references("instruction_id")
        .inTable("instructions");
    })
    .createTable("recipes", table => {
      table.increments("recipe_id");
      table.text("recipe_name", 128).notNullable().unique();
      table.integer("guide_id").references("guide_id").inTable("guides");
    })
    .createTable("ingredients", table => {
      table.increments("ingredient_id");
      table.text("ingredient_name", 128).notNullable().unique();
      table.text("ingredient_quantity", 128).notNullable();
    })
    .createTable("instructions", table => {
      table.increments("instruction_id");
      table.text("instruction_task", 128).notNullable().unique();
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("instructions")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("recipes")
    .dropTableIfExists("guides");
};
