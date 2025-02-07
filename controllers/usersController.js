const usersModel = require('../models/usersModel');
const bcrypt = require('bcrypt');
const jwt = require ('jsonwebtoken');
const recipesModel = require('../models/recipesModel');


const addUser = async (req,res) => {
    try {
      const usersData = req.body;
      await usersModel.create(usersData);
      res.status(200).send("La usuario se creó correctamente");
    } catch (error) {
      res.status(500).send({ status: 'Failed', error: error.message})
    }
  };

  const getRecipesFav = async (req,res) => {
    try {
      const idUser = req.payload._id;
      const user = await usersModel.findById(idUser);
      if (!user) {
        return res.status(404).send("Usuario no encontrado");
      }
      res.status(200).send(user.favoriteRecipes);
    } catch (error) {
      res.status(500).send({ status: "failed", error: error.message})
    }
  }

  const addFavRecipe = async (req,res) => {
    try {
      const idUser = req.payload._id;
      const recipeId = req.params.recipeId
      
      const user = await usersModel.findById(idUser);
      const recipe = await recipesModel.findById(recipeId);
      if (user.favoriteRecipes.includes(recipeId)) {
        return res.status(400).json({ status: "failed", error: "La receta ya está en tus favoritos" });
    }
    user.favoriteRecipes.push(recipeId);
    await user.save();


      res.status(200).send(user);
    } catch (error) {
      res.status(500).send({ status: 'Failed', error: error.message})
    }
  };

  const delFavRecipe = async (req,res) => {
    try {
      const idUser = req.payload._id;
      const recipeId = req.params.recipeId
      
      const user = await usersModel.findById(idUser);
      const recipe = await recipesModel.findById(recipeId);
      if (!user.favoriteRecipes.includes(recipeId)) {
        return res.status(400).json({ status: "failed", error: "La receta no está en tus favoritos" });
      }
  
      user.favoriteRecipes.pull(recipeId);
      await user.save(); 

      res.status(200).send(user);
    } catch (error) {
      res.status(500).send({ status: 'Failed', error: error.message})
    }
  };

  const modUser = async (req,res) => {
    try {
      const usersData = req.body;
      await usersModel.updateOne(usersData);
      res.status(200).send("El usuario se modificó correctamente");
    } catch (error) {
      res.status(500).send({ status: 'Failed', error: error.message})
    }
  };

  module.exports = { addUser, getRecipesFav, addFavRecipe, delFavRecipe, modUser };


  //getAllUsers, delByNombre, updateUser, getUserById, getNameContent