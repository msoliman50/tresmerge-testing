// 3rd party libraries
const express = require('express');

// own libraries
const booksController = require('./books.controller');

// create the category router
const booksRouter = express.Router();

// define the routes
booksRouter
  .route('/')
  .get(booksController.getBooks)
  .post(booksController.createBook);

booksRouter
  .route('/:id')
  .get(booksController.getBook)
  .put(booksController.updateBook)
  .delete(booksController.deleteBook);

module.exports = booksRouter;
