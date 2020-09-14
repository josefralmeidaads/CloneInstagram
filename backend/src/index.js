const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')
const app = express();

const routes = require('./routes');
const path  = require('path');

mongoose.connect('mongodb+srv://arrowgamer:arrowgamer@oministack.7qksd.mongodb.net/cloneInstagram?retryWrites=true&w=majority', {
    useUnifiedTopology: true,
    useNewUrlParser: true 
})

app.use(express.json());
app.use(cors());

app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads', 'resized'))) // retornando o caminho relativo da imagem no computador e não simplesmente o nome

app.use(routes);

app.listen(3333);