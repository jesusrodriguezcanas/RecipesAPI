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

  module.exports = { addRecipe };


  //getAllUsers, delByNombre, updateUser, getUserById, getNameContent