//estas dos lineas siempre son iguales para los modelos
const { ObjectId } = require('bson');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipesSchema = new Schema({
    title:{
        type: String,
        required: [true, "El titulo es obligatorio"]
    },
    description: {
        type: String,
        required: [true, "La descripcion es requerida"]
    },
    ingredients: {
        type: [String],
        required: [true, "Ingredientes obligatorios"]
    },
    category: {
    type: String,
        required: [true, "categoría obligatoria"],
        enum: [ "postres", "bebidas", "carne"],
        default: "postres"
    },
    imageUrl: {
        type: String
    },
    // favoritas: {
    //     type: [mongoose.Schema.Types.ObjectId],
    //     ref: "movie",
    //     //esto guardaria los id de las pelis en un apartado de favoritos 
    //     //dentro de un array (movie referencia la coleccion)
    // },
    dificultad: {
        type: String
        //esto guardaria los id de las pelis en un apartado de favoritos 
        //dentro de un array (movie referencia la coleccion)
    },
    likes: {
        type: [ObjectId]
        //esto guardaria los id de las pelis en un apartado de favoritos 
        //dentro de un array (movie referencia la coleccion)
    },
    fechaCreacion: {
        type: Date,
        default: Date.now
        //esto guardaria los id de las pelis en un apartado de favoritos 
        //dentro de un array (movie referencia la coleccion)
    }
});

const recipesModel = mongoose.model('Recipes', recipesSchema,"recipes");

module.exports = recipesModel;