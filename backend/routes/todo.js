const express = require('express');
const db = require('../data/database');

const router = express.Router();

/////////READ:

router.get('/', async (req, res, next) => {
  const todos = await db.getDb().collection('todos').find().toArray();

  res.json({ todos });
});

////////Create:

router.post('/todos', async (req, res, next) => {
  const { text, id } = req.body;

  db.getDb().collection('todos').insertOne({ text, id });

  res.json({ text, id });
});

////////Delete:

router.delete('/todos/:tid', async (req, res, next) => {
  const { todoId } = req.params.tid;

  const deleteTodo = await db.getDb().collection('todos').deleteOne(todoId);

  res.json({ deleteTodo });
});

////////Update:

router.patch('/todos/:tid', async (req, res, next) => {
  const todoId = req.params.tid;
  const { text } = req.body;

  await db
    .getDb()
    .collection('todos')
    .updateOne({ id: todoId }, { $set: { text: text } });

  const updatedTodos = await db.getDb().collection('todos').find().toArray();

  res.json({ updatedTodos });
});

module.exports = router;
