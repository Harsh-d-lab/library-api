const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    isbn: { type: String, unique: true, required: true },
    title: { type: String, required: true },
    author: { type: String, required: true },
    publishedDate: { type: Date, required: true },
    genre: { type: String, required: true },
    available: { type: Boolean, default: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;