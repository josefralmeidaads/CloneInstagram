const Post = require('../Models/Post')
const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

module.exports = {
    async index(request, response) {
        const posts = await Post.find().sort('-createdAt'); // ordem descrescente por criação

        return response.json(posts);
    },

    async store(request, response) {
        const { author, 
            place, 
            description, 
            hashtags,
            likes
        } = request.body;

        const {filename: image} = request.file; // pegando o caminho da imagem

        const[name] = image.split(',');
        const fileName = `${name}.jpg`

        await sharp(request.file.path)
        .resize(500) //redimensionando a imagem para 500 pixes
        .jpeg({ quality: 70 }) // informando a qualidade da imagem
        .toFile(path.resolve(request.file.destination, 'resized', fileName)) // informando o caminho para salvar o arquivo redimensionado e seu nome

        //apagando imagem que não foi redimensionada usando o file system
        fs.unlinkSync(request.file.path);

        const post = await Post.create({
            author, 
            place, 
            description, 
            hashtags,
            image: fileName,
            likes
        });

        request.io.emit('post', post);

        return response.json(post);
    },
}