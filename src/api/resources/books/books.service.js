const Book = require('./books.model');

// get all books
const getBooks = async () => {
  try {
    return await Book.find({});
  } catch (error) {
    console.log('failed to get books' + error);
    throw error;
  }
};

// get book
const getBook = async (bookId) => {
  try {
    if (!bookId) {
      throw new Error('bookId is not defined');
    }
    const book = await Book.findById(bookId);
    if (!book) {
      console.log(`book with id: ${bookId} does not exist`);
    }
    return book;
  } catch (error) {
    console.log('failed to get book' + error);
    throw error;
  }
};

// create book
const createBook = async (body) => {
  try {
    return await Book.create(body);
  } catch (error) {
    console.log('failed to create book' + error);
    throw error;
  }
};

// update book
const updateBook = async (book, body) => {
  try {
    return await Book.findByIdAndUpdate(book.id, body, { new: true });
  } catch (error) {
    console.log('failed to update book' + error);
    throw error;
  }
};

// delete book
const deleteBook = async (book) => {
  try {
    await book.delete();
  } catch (error) {
    console.log('failed to delete book' + error);
    throw error;
  }
};

module.exports = {
  getBooks,
  getBook,
  createBook,
  updateBook,
  deleteBook
};
