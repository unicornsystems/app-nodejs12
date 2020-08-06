'use strict';

// Requirements
const express = require('express');
// npm install dotenv --save
// load environments variables from .env file in application root folder
if (process.env.LOADENV == 'true') {
  require('dotenv').config();
}

// Constants
const PORT = process.env.PORT || 8080;
const HOST = process.env.HOST || '0.0.0.0';
const MESSAGE = process.env.MESSAGE || 'HELLO WORLD';

// App
const app = express();
app.get('*', (req, res) => {
  console.log(`Request at ${new Date().toISOString()}`);
  res.send(MESSAGE);
});


app.listen(PORT,HOST);
console.log(`Running on http://${HOST}:${PORT}`);