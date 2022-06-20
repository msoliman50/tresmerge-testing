// 3rd party libraries
const express = require('express');

// own libraries
const booksRouter = require('./resources/books/books.router');

// create the rest router
const restRouter = express.Router();

// map the api routes
restRouter.use('/books', booksRouter);

module.exports = restRouter;
