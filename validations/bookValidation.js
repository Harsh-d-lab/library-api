const Joi = require('joi');

const bookSchema = Joi.object({
    isbn: Joi.string().required(),
    title: Joi.string().required(),
    author: Joi.string().required(),
    publishedDate: Joi.date().required(),
    genre: Joi.string().required(),
    available: Joi.boolean().required()
});

module.exports = {
    bookSchema
};