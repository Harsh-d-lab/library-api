const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');
const validate = require('../middlewares/validate');
const { bookSchema } = require('../validations/bookValidation');

router.get('/books/search', bookController.searchBooks);
router.post('/books', validate(bookSchema), bookController.createBook);
router.get('/books', bookController.getAllBooks);
router.get('/books/:id', bookController.getBookById);
router.put('/books/:id', validate(bookSchema), bookController.updateBook);
router.delete('/books/:id', bookController.deleteBook);

module.exports = router;