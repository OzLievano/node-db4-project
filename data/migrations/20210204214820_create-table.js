
exports.up = function(knex) {
  return knex.schema.createTable('recipes',tbl=>{
      tbl.increments();
      tbl.string('recipe_name',128).notNullable();
  })
  .createTable('instructions',tbl=>{
    tbl.increments();
    tbl.string('instruction',128).notNullable()
    tbl.integer('recipe_id').unsigned().notNullable().references('recipes.id')
  })
  .createTable('ingredients',tbl=>{
      tbl.increments();
      tbl.string('ingredient_name',128).notNullable();
      tbl.integer('recipe_id').unsigned().notNullable().references('recipes.id')
  })
  .createTable('recipe_ingredients',tbl=>{
      tbl.integer('recipe_id').unsigned().notNullable().references('recipes.id')
      tbl.integer('ingredient_id').unsigned().notNullable().references('ingredients.id')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('recipe_ingredients').dropTableIfExists('ingredients').dropTableIfExists('instructions').dropTableIfExists('recipes')
};
