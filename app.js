// 3rd party libraries
const express = require('express');
const bodyParser = require('body-parser');

// own files
require('./config/config');
const restRouter = require('./src/api/api-routes');

// create app instance and get port
const app = express();
const PORT = process.env.PORT;

// configure app
app.use(bodyParser.json());

// map the app routes
app.use('/api', restRouter);

// bind app to the PORT
app.listen(PORT, () => {
  console.log(
    `app is up and running in the ${process.env.NODE_ENV} mode on port ${PORT}`
  );
});
