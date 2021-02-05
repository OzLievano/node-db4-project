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

router.get('/:id/instructions',function getSteps(req,res){
    const {id}= req.params;
    Recipes.getInstructions(id)
    .then((instructions)=>{
        res.status(200).json(instructions)
    })
    .catch((error)=>{
        res.status(200).json({error:error.message})
    })
})

module.exports = router;