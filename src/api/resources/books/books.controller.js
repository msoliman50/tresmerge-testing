// own libraries
const booksService = require('./books.service');

// get all books
const getBooks = async (req, res) => {
  try {
    const books = await booksService.getBooks();
    return res.json({
      message: 'books retrieved successfully',
      data: { books }
    });
  } catch (error) {
    return res.status(500).json({ message: 'failed to get books' });
  }
};

// get book
const getBook = async (req, res) => {
  try {
    const bookId = req.params.id;
    const book = await booksService.getBook(bookId);

    if (!book) {
      return res.status(404).json({ message: '404 not found' });
    }

    return res.json({
      message: 'book retrieved successfully',
      data: { book }
    });
  } catch (error) {
    return res.status(500).json({ message: 'failed to get book' });
  }
};

// create book
const createBook = async (req, res) => {
  try {
    const { title, description, price } = req.body;
    if (!title) {
      return res
        .status(400)
        .json({ message: '400 invalid request, title is required' });
    }
    const book = await booksService.createBook({ title, description, price });
    return res.status(201).json({
      message: 'book created successfully',
      data: { book }
    });
  } catch (error) {
    return res.status(500).json({ message: 'failed to create book' });
  }
};

// update book
const updateBook = async (req, res) => {
  try {
    const bookId = req.params.id;
    const book = await booksService.getBook(bookId);

    if (!book) {
      return res.status(404).json({ message: '404 not found' });
    }

    const { title, description, price } = req.body;
    const updatedBook = await booksService.updateBook(book, {
      title,
      description,
      price
    });
    return res.json({
      message: 'book updated successfully',
      data: { book: updatedBook }
    });
  } catch (error) {
    return res.status(500).json({ message: 'failed to update book' });
  }
};

// delete book
const deleteBook = async (req, res) => {
  try {
    const bookId = req.params.id;
    const book = await booksService.getBook(bookId);

    if (!book) {
      return res.status(404).json({ message: '404 not found' });
    }
    await booksService.deleteBook(book);
    return res.json({
      message: 'book deleted successfully'
    });
  } catch (error) {
    return res.status(500).json({ message: 'failed to delete book' });
  }
};

module.exports = {
  getBooks,
  getBook,
  createBook,
  updateBook,
  deleteBook
};
