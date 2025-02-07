const recipesModel = require('../models/recipesModel');


const addRecipe = async (req,res) => {
    try {
      const recipesData = req.body;
      await recipesModel.create(recipesData);
      res.status(200).send("La receta se creó correctamente");
    } catch (error) {
      res.status(500).send({ status: 'Failed', error: error.message})
    }
  };

  const getRecipeId = async (req,res) => {
    try {
        const idRecipe = req.params.idRecipe;
        const recipe = await recipesModel.findById(idRecipe);
        if (!recipe) {
          return res.status(404).send("Receta no existe");
        }
        res.status(200).send(recipe);
      } catch (error) {
        res.status(500).send({ status: "failed", error: error.message})
      }
    };

    
const getLastRecipes = async (req,res) => {
    try {
      const recipes = await recipesModel.find().sort({ createdAt: -1 }).limit(5);
      res.status(200).send(recipes);
    } catch (error) {
      res.status(500).send({ status: 'Failed', error: error.message})
    }
    };

    const getPopularRecipes = async (req,res) => {
      try {
        const recipes = await recipesModel.find().sort({ favoriteRecipes: -1 }).limit(5);
        res.status(200).send(recipes);
      } catch (error) {
        res.status(500).send({ status: 'Failed', error: error.message})
      }
      };

      const createRecipeAdmin = async (req,res) => {
        try {
          const recipesData = req.body;
          await recipesModel.create(recipesData);
          res.status(200).send("La receta se creó correctamente");
        } catch (error) {
          res.status(500).send({ status: 'Failed', error: error.message})
        }
      };


      const modRecipe = async (req,res) => {
        try {
          const recipesData = req.body;
          await recipesModel.updateOne(recipesData);
          res.status(200).send("La receta se modificó correctamente");
        } catch (error) {
          res.status(500).send({ status: 'Failed', error: error.message})
        }
      };


      const delRecipe = async (req,res) => {
        try {
          const recipesData = req.params.idRecipe;
          await recipesModel.findByIdAndDelete(recipesData);
          res.status(200).send("La receta se borró correctamente");
        } catch (error) {
          res.status(500).send({ status: 'Failed', error: error.message})
        }
      };
      

      // const addComent = async (req,res) => {
      //   try {
      //     const recipesData = req.params.idRecipe;
      //     const { comment } = req.body; // Obtener el comentario desde el body
      //     const updatedRecipe = await recipesModel.findByIdAndUpdate(recipesData,
      //       { $set: { comment } },
      //       { new: true }
      //     );
      //     res.status(200).json({ status: "Success", message: "Comentario añadido correctamente", recipe: updatedRecipe });
      //   } catch (error) {
      //     res.status(500).send({ status: 'Failed', error: error.message})
      //   }
      // }

  module.exports = { addRecipe, getRecipeId, getLastRecipes, getPopularRecipes, createRecipeAdmin, modRecipe, delRecipe };


