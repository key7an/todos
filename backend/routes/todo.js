const express = require('express');
const db = require('../data/database');

const router = express.Router();

router.get('/', async (req, res, next) => {
  const todos = await db.getDb().collection('todos').find().toArray();
  
  res.json({ todos });
});

router.post('http://localhost:5000/todo', async (req, res, next) => {
  db.getDb().todos.insertOne({ text: req.body.text });

  res.json({ message: 'Todo stored!' });
});

module.exports = router;
