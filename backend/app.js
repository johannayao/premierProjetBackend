const express = require('express')
const app = express();
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
let cors = require('cors');
const path = require('path');
const routerUser = require('./routes/user.js');



mongoose.connect('mongodb+srv://yaojohanna2003:johanna@cluster0.4rnwdve.mongodb.net/?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));


  app.use(cors())
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use('/api/user', routerUser);
  app.use('/api/livres', routerUser);
  app.use('/images', express.static(path.join(__dirname, 'images')));
  
  module.exports= app;



