const express = require('express');
const { addUser, getRecipesFav, addFavRecipe, delFavRecipe, modUser } = require('../controllers/usersController');
// const { addRecipe, getAllRecipes, delByNombre, updateUser, getUserById, getNameContent} = require("../controllers/userController");
const { verifyToken, verifyAdmin } = require ( "../middleware/auth");
const router = express.Router();




router.post("/users", addUser);
router.get("/users/favorites", verifyToken, getRecipesFav );
router.post("/users/:recipeId/favorite", verifyToken, addFavRecipe);
router.delete("/users/:recipeId/favorite", verifyToken, delFavRecipe);
router.patch("/user", verifyToken, modUser);
// router.get("/users/myProfile", verifyToken, verifyAdmin , getUserById);
// router.get("/usersNameContent/:name", getNameContent)

// router.get();

module.exports = router;

//67991b893197a1df7d709ec9