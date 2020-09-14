const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')
const app = express();
const routes = require('./routes');
const path  = require('path');
const { request } = require('http');

const server = require('http').Server(app); // informando que o server acessar o protocolo http

const io = require('socket.io')(server)// nessa momento o server suporta tanto http como webservices

mongoose.connect('mongodb+srv://arrowgamer:arrowgamer@oministack.7qksd.mongodb.net/cloneInstagram?retryWrites=true&w=majority', {
    useUnifiedTopology: true,
    useNewUrlParser: true 
})

app.use(( request, response, next) => {
    request.io = io; //definindo que minhas requisições aora poderam ouvir o websocket

    next();
})

app.use(express.json());
app.use(cors());

app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads', 'resized'))) // retornando o caminho relativo da imagem no computador e não simplesmente o nome

app.use(routes);

server.listen(3333);