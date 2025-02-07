const express = require('express');
const { signup, login } = require('../controllers/loginController');
const { verifyToken } = require('../middleware/auth');
const { generateToken } = require('../utils/utils');
const router = express.Router();

router.post('/signup', signup)
router.post('/login', login)
//solo este endpoint puede usar el token de refresco
router.get('/refresh-token', verifyToken, generateToken);

module.exports = router;