
exports.seed = function(knex, Promise) {
  return knex('instructions').insert([   
    { instruction: 'toast bread', recipe_id: 1 },
    { instruction: 'Melt the damn cheese', recipe_id: 1 }
  ]);
};

