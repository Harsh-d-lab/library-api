const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    isbn: {
        type: String,
        required: true,
        unique: true
    },
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    publishedDate: {
        type: Date,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    available: {
        type: Boolean,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;