const db = require('../../data/db-config');

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
}

async function getRecipes(){
    return await db('recipes');
}

async function getShoppingList(){
    return await db('recipes as r')
        .join('ingredients as i','r.id','i.recipe_id')
        .join('recipe_ingredients as ri',function(){
            this.on('ri.recipe_id','=','r.id').andOn('ri.ingredient_id','=','i.id')
        })
        .select('r.recipe_name','i.ingredient_name','ri.quantity')
}

async function getInstructions(){
    return await db('recipes as r')
        .join('instructions as i','r.id','i.recipe_id')
        .select('i.id','i.instruction')
}