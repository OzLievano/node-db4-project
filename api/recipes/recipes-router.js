const express = require('express')
const router = express.Router();
const Recipes = require('./recipes-model');

router.get('/', function getRecipes(req,res){
    Recipes.getRecipes()
    .then((recipes)=>{
        res.status(200).json(recipes)
    })
    .catch((error)=>{
        res.status(500).json({error:error.message})
    })
})

module.exports = router;