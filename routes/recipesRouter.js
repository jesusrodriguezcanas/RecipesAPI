const express = require('express');
const { addRecipe, getRecipeId } = require('../controllers/recipesController');
// const { addRecipe, getAllRecipes, delByNombre, updateUser, getUserById, getNameContent} = require("../controllers/userController");
// const { verifyToken, verifyAdmin } = require ( "../middleware/auth");
const router = express.Router();




router.post("/recipes", addRecipe);
router.get("/recipes/:idRecipe", getRecipeId);
// router.delete("/users/:idUser", delByNombre);
// router.patch("/users/:idUser", updateUser);
// router.get("/users/myProfile", verifyToken, verifyAdmin , getUserById);
// router.get("/usersNameContent/:name", getNameContent)

// router.get();

module.exports = router;