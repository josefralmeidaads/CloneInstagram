const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
    author: String,
    place: String,
    desciption: String,
    hashtags: String,
    image: String,
    likes: {
        type: Number,
        default: 0,
    },
}, {
    timestamps: true,
    toJSON: {
        virtuals: true,
    }
});

PostSchema.virtual('image_url').get(function(){
    return `http://10.0.0.114:3333/files/${this.image}`
})

module.exports = mongoose.model('Post', PostSchema);