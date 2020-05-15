const mongoose = require('mongoose');

const ImageSchema = new mongoose.Schema({
    user: {
        type: String,
        required: true,
        trim: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    img: {
        type: Buffer,
        required: true
    },
    filename: {
        type: String,
        required: true
    },
})

module.exports = mongoose.model('Image', ImageSchema);