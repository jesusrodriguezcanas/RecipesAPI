const recipesModel = require('../models/recipesModel');


const addRecipe = async (req,res) => {
    try {
      const recipesData = req.body;
      await recipesModel.create(recipesData);
      res.status(200).send("La usuario se creó correctamente");
    } catch (error) {
      res.status(500).send({ status: 'Failed', error: error.message})
    }
  };

  const getRecipeId = async (req,res) => {
    try {
        const idRecipe = req.payload._id;
        const recipe = await recipesModel.findById(idRecipe);
        if (!recipe) {
          return res.status(404).send("Receta no existe");
        }
        res.status(200).send(recipe);
      } catch (error) {
        res.status(500).send({ status: "failed", error: error.message})
      }
    }

  module.exports = { addRecipe, getRecipeId };


  //getAllUsers, delByNombre, updateUser, getUserById, getNameContent