const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    numberPages: {
        type: Number,
        required: true,
    },
    isbn: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    publisher: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
})

module.exports = mongoose.model('Book', bookSchema);