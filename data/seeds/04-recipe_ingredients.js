exports.seed = function(knex, Promise) {
  return knex('zoo_animals').insert([
    { recipe_id: 1, ingredient_id: 1 },
    { recipe_id: 1, ingredient_id: 2 }
  ]);
};