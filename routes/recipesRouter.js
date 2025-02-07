const express = require('express');
const { addRecipe, getRecipeId, getLastRecipes, getPopularRecipes,
      createRecipeAdmin, modRecipe, delRecipe} = require('../controllers/recipesController');
const { verifyToken, verifyAdmin } = require('../middleware/auth');
// const { addRecipe, getAllRecipes, delByNombre, updateUser, getUserById, getNameContent} = require("../controllers/userController");
// const { verifyToken, verifyAdmin } = require ( "../middleware/auth");
const router = express.Router();




// router.post("/recipes/:idRecipe/comment", verifyToken, addComent)
router.post("/recipes", addRecipe);
router.get("/recipes/:idRecipe", getRecipeId);
router.get("/lastRecipes", getLastRecipes);
router.get("/popularRecipes", getPopularRecipes);
router.post("/recipe", verifyToken, verifyAdmin, createRecipeAdmin);
router.patch("/recipes/:idRecipe", verifyToken, verifyAdmin, modRecipe);
router.delete("/recipe/:idRecipe", verifyToken, verifyAdmin, delRecipe);

// router.delete("/users/:idUser", delByNombre);
// router.get("/users/myProfile", verifyToken, verifyAdmin , getUserById);
// router.get("/usersNameContent/:name", getNameContent)

// router.get();

module.exports = router;