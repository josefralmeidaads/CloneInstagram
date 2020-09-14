const multer = require('multer');
const path = require('path');

module.exports = {
    storage: new multer.diskStorage({
        destination: path.resolve(__dirname, '..', '..', 'uploads'), // indicando caminho apra salvar images
        filename: function( request, file, callback){ // setando o nome do arquivo na hora da gravação 
            callback(null, file.originalname);// gravando a imagem que o nome original
        }
    })
};

