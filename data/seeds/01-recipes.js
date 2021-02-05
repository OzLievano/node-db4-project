
exports.seed = function(knex, Promise) {
  return knex('recipes').insert([   
    { recipe_name: 'Five Cheese Griller'},
    { recipe_name: 'Chicken Parm' }
  ]);
};
