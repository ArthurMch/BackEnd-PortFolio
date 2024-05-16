require('dotenv').config()
const dotenv = require('dotenv')
const express = require('express');
const mongoose = require('mongoose');
var hobbieRouter = require('./routes/hobbieRoute');
var projectRouter = require('./routes/projectRoute');

// Configuration dotenv pour l'API
function configurationDotenv() {
  const result = dotenv.config();
  if (result.error) {
    console.error('Erreur lors de la configuration de dotenv:', result.error.message);
    process.exit(1);
  }
}

// DB connection
async function connectToDb() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connexion à la base de données réussie !');
  } catch (error) {
    console.error('Erreur lors de la connexion à la base de données:', error.message);
    process.exit(1);
  }
}

// Local CO http://127.0.0.1:3000/ 
function connectToLocalHost(){
  var app = express();
  const port = process.env.PORT;
  app.use('/hobbie', hobbieRouter);
  app.use('/project', projectRouter);
  app.listen(port, (err) => {
  if (err) {
    console.error('Erreur lors du démarrage du serveur:', err);
    process.exit(1);
  }
  console.log(`Serveur démarré sur le port ${port}`);
});
}

connectToDb();
connectToLocalHost();
configurationDotenv();
