const bookService = require('../services/bookService');
const Joi = require('joi');

const createBookSchema = Joi.object({
    isbn: Joi.string().required(),
    title: Joi.string().required(),
    author: Joi.string().required(),
    publishedDate: Joi.date().required(),
    genre: Joi.string().required(),
    available: Joi.boolean()
});

exports.createBook = async (req, res) => {
    try {
        const { error } = createBookSchema.validate(req.body);
        if (error) return res.status(400).send(error.details[0].message);

        const book = await bookService.createBook(req.body);
        res.status(201).send(book);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.getAllBooks = async (req, res) => {
    try {
        const books = await bookService.getAllBooks();
        res.status(200).send(books);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.getBookById = async (req, res) => {
    try {
        const book = await bookService.getBookById(req.params.id);
        res.status(200).send(book);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.updateBook = async (req, res) => {
    try {
        const book = await bookService.updateBook(req.params.id, req.body);
        res.status(200).send(book);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.deleteBook = async (req, res) => {
    try {
        await bookService.deleteBook(req.params.id);
        res.status(200).send('Book deleted successfully');
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.searchBooks = async (req, res) => {
    try {
        const books = await bookService.searchBooks(req.query);
        res.status(200).send(books);
    } catch (err) {
        res.status(500).send(err.message);
    }
};
