const Book = require('../models/bookModel');

exports.createBook = async (bookData) => {
    try {
        const book = new Book(bookData);
        return await book.save();
    } catch (error) {
        throw new Error('Error creating book: ' + error.message);
    }
};

exports.getAllBooks = async () => {
    try {
        return await Book.find();
    } catch (error) {
        throw new Error('Error retrieving books: ' + error.message);
    }
};

exports.getBookById = async (bookId) => {
    try {
        const book = await Book.findById(bookId);
        if (!book) {
            throw new Error('Book not found');
        }
        return book;
    } catch (error) {
        throw new Error('Error retrieving book: ' + error.message);
    }
};

exports.updateBook = async (bookId, bookData) => {
    try {
        const book = await Book.findByIdAndUpdate(bookId, bookData, {
            new: true,
            runValidators: true
        });
        if (!book) {
            throw new Error('Book not found');
        }
        return book;
    } catch (error) {
        throw new Error('Error updating book: ' + error.message);
    }
};

exports.deleteBook = async (bookId) => {
    try {
        const book = await Book.findByIdAndDelete(bookId);
        if (!book) {
            throw new Error('Book not found');
        }
        return book;
    } catch (error) {
        throw new Error('Error deleting book: ' + error.message);
    }
};

exports.searchBooks = async (searchCriteria) => {
    try {
        return await Book.find(searchCriteria);
    } catch (error) {
        throw new Error('Error searching books: ' + error.message);
    }
};