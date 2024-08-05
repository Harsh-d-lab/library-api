const Book = require('../models/book');

exports.createBook = async (req, res) => {
    try {
        const book = new Book(req.body);
        await book.save();
        res.status(201).send(book);
    } catch (error) {
        res.status(400).send(error);
    }
};
exports.getAllBooks = async (req, res) => {
    try {
        const books = await Book.find({});
        res.status(200).send(books);
    } catch (error) {
        res.status(500).send(error);
    }
};
exports.getBookById = async (req, res) => {
    const _id = req.params.id;
    try {
        const book = await Book.findById(_id);
        if (!book) {
            return res.status(404).send();
        }
        res.status(200).send(book);
    } catch (error) {
        res.status(500).send({ message: "Error retrieving book", error });
    }
};

exports.updateBook = async (req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ['isbn', 'title', 'author', 'publishedDate', 'genre', 'available'];
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update));

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' });
    }

    try {
        const book = await Book.findById(req.params.id);

        if (!book) {
            return res.status(404).send();
        }

        updates.forEach((update) => (book[update] = req.body[update]));
        await book.save();

        res.status(200).send(book);
    } catch (error) {
        res.status(400).send(error);
    }
};
exports.deleteBook = async (req, res) => {
    try {
        const book = await Book.findByIdAndDelete(req.params.id);

        if (!book) {
            return res.status(404).send();
        }

        res.status(200).send({ message: 'Book deleted successfully' });
    } catch (error) {
        res.status(500).send(error);
    }
};
exports.searchBooks = async (req, res) => {
    const query = req.query;
    try {
        const books = await Book.find(query);
        res.status(200).send(books);
    } catch (error) {
        res.status(500).send(error);
    }
};
