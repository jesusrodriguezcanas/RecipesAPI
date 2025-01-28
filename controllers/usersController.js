const usersModel = require('../models/usersModel');


const addUser = async (req,res) => {
    try {
      const usersData = req.body;
      await usersModel.create(usersData);
      res.status(200).send("La usuario se creó correctamente");
    } catch (error) {
      res.status(500).send({ status: 'Failed', error: error.message})
    }
  };

  module.exports = { addUser };


  //getAllUsers, delByNombre, updateUser, getUserById, getNameContent