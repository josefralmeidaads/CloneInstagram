const express = require('express');
const routes = express.Router();
const multer = require('multer');

const uploadConfig = require('./Config/upload'); // arquivo com caminho de configurado
const upload = multer(uploadConfig); // me permite enviar arquivos do tipo multiform

const PostController = require('./Controllers/PostController');
const LikeController = require('./Controllers/LikeController')

routes.get('/', PostController.index);
routes.post('/posts', upload.single('image'), PostController.store);

routes.post('/posts/:id/like', LikeController.store);

module.exports = routes;