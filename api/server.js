const express = require('express');

const server = express();

const RecipeRouter = require('./recipes/recipes-router')

server.use(express.json());
server.use('/api/recipes',RecipeRouter);

module.exports = server;