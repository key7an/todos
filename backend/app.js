const express = require('express');
const bodyParser = require('body-parser');

const db = require('./data/database');
const todos = require('./routes/todo');

//////////////////////////////

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT, PATCH');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.use(todos);

db.connectToDatabase().then(() => {
  app.listen(5000);
});
