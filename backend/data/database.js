const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;

let database;

const connect = async () => {
  const client = await MongoClient.connect(
    'mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000'
  );
  database = client.db('todos');
};

const getDb = () => {
  if (!database) {
    throw { message: 'Database connection not established!' };
  }
  return database;
};

module.exports = {
  connectToDatabase: connect,
  getDb,
};
