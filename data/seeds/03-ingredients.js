
exports.seed = function(knex, Promise) {
  return knex('zoos').insert([   
    { ingredient_name: 'Gouda Cheese', recipe_id: 1 },
    { ingredient_name: 'Potato Bread', recipe_id: 1 }
  ]);
};

