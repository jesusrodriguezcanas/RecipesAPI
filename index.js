// Requerimos el paquete de express para crear la app
const express = require("express");
const recipesRouter = require('./routes/recipesRouter');
// const recipesRouter = require('./routes/usersRouter')
// const recipesRouter = require('./routes/loginRouter');
require('dotenv').config()
const connectToDatabase = require('./db/db')

// Inicializamos la app de express
const app = express();


// Middleware para manejar los datos que son JSON
app.use(express.json());
connectToDatabase();


app.use('/api', recipesRouteresRouter );
// app.use('/api', usersRouter);
// app.use('/api',loginRouter);

app.listen(3000, () => {
  console.log("server is running http://localhost:3000");
});


module.exports = app;