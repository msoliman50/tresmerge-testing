// 3rd party libraries
require('dotenv').config();
const mongoose = require('mongoose');

// env setup
const env = process.env.NODE_ENV || 'development';
if (env === 'testing') {
  Object.assign(process.env, {
    PORT: 5000,
    DB_NAME: 'books-test',
    MONGODB_URI: 'mongodb://localhost:27017/books-test'
  });
}

// database connection
mongoose
  .connect(process.env.MONGODB_URI, {
    authSource: 'admin',
  })
  .then(() =>
    console.log(`connected successfully to DB: ${process.env.DB_NAME}`)
  )
  .catch((error) => console.log(`failed to connect to DB: ${error}`));
