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

   res.status(201).json({ text, id });
});

////////Delete:

router.delete('/todos/:tid', async (req, res, next) => {
  const { todoId } = req.params.tid;

  const deleteTodo = await db.getDb().collection('todos').deleteOne(todoId);

  res.json({ deleteTodo });
});

router.delete('/todos/', async (req, res, next) => {
 const deleteTodo = await db.getDb().collection('todos').deleteMany({});

  res.json({ deleteTodo });
});

////////Update:

router.put('/todos/:tid', async (req, res, next) => {
  const todoId = req.params.tid;
  const { text } = req.body;

  await db
    .getDb()
    .collection('todos')
    .updateOne({ id: todoId }, { $set: { text: text } });

   const updatedTodo = await db
    .getDb()
    .collection('todos')
    .findOne({ id: todoId });

  res.status(200).json({ updatedTodo });
});

module.exports = router;
