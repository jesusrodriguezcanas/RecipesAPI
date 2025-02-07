const usersModel = require('../models/usersModel');
const bcrypt = require('bcrypt');
const jwt = require ('jsonwebtoken');
const { generateToken } = require('../utils/utils');

const signup =  async (req,res) => {
    try {
        const { name, email, password, role} = req.body;
        const newUser = {
            name,
            email,
            password: await  bcrypt.hash(password, 10),
            role
            // createAt,
        };

        await usersModel.create(newUser);
        res.status(200).send('usuario creado ok');
    } catch (error) {
        if(error.code === 11000) {
            return res
            .status(500)
            .send({ status: 'failed', error: 'el correo ya existe'});
        }

        res.status(500).send({ status: 'Failed', error: error.message})
    }
};


const login = async (req,res) => {
    try {
        const { email, password } = req.body;

        const user = await usersModel.findOne({ email: email});
        if (!user) {
            return res.status(404).send("email o contraseña no validos");
        }
        //primer password es el valor que entra x el body
        //segundo password es el valor encriptado que devuelve x el bcrypt
        const validatePassword = await bcrypt.compare(password, user.password)
        if(!validatePassword) {
            return res.status(404).send("usuario o contraseña no validos");
        }

        const payload = {
            _id: user._id,
            name: user.name,
            role: user.role,
        };
    


        // const token = await jwt.sign(payload, process.env.SECRET_TOKEN, { 
        //     expiresIn: '15min', });

        // const tokenRefresh = await jwt.sign(payload, process.env.SECRET_TOKEN_REFRESH, {
        //     expiresIn: '60min', 
        // });

        const token = generateToken(payload, false);
        const tokenRefresh = generateToken(payload, true);

        res.status(200).send({user, token, tokenRefresh});
    } catch (error) {
        res.status(500).send({ status: "failed", error: error.message});
    }
}

const tokenRefresh = (req, res) => {
    try {
        const payload = {
            _id: req.payload._id,
            name: req.payload.name,
            role: req.payload.role, 
        }
        const token = generateToken(payload, false);
        const tokenRefresh = generateToken(payload, true);
        res.status(200).send({user, token, tokenRefresh});
    } catch (error) {
        res.status(500).send({ status: "failed", error: error.message});
    }
}

module.exports = { signup, login, tokenRefresh };