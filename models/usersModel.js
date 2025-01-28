//estas dos lineas siempre son iguales para los modelos
const { ObjectId } = require('bson');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usersSchema = new Schema({
    name:{
        type: String,
        required: [true, "El nombre es obligatorio"]
    },
    email: {
        type: String,
        required: [true, "El email es requerido"]
    },
    password: {
        type: [String],
        required: [true, "contraseña obligatoria"]
    },
    role: {
        type: String,
        enum: [ "user", "admin"],
        default: "user"
    },
    favoriteRecipes: {
        type: [ObjectId]
        //esto guardaria los id de las pelis en un apartado de favoritos 
        //dentro de un array (movie referencia la coleccion)
    },
});

const usersModel = mongoose.model('Users', usersSchema,"users");

module.exports = usersModel;