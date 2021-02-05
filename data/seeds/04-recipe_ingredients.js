exports.seed = function(knex, Promise) {
  return knex('recipe_ingredients').insert([
    { recipe_id: 1, ingredient_id: 1, quantity:5},
    { recipe_id: 1, ingredient_id: 2, quantity: 2}
  ]);
};