const { MongoClient } = require("mongodb");
const mongoose = require("mongoose");

const uri = "mongodb+srv://joaolucas:110998@clusterpdi.ys5ojoj.mongodb.net/collection-pdi?retryWrites=true&w=majority";
mongoose.connect(uri)
  .then(() => {
    console.log("Connected to MongoDB Successfully");
  })
  .catch((err) => {
    console.log("Could not connect to MongoDB");
    console.error(err);
  });

function getConnection() {
  const db = mongoose.connection;
  return db;
}

module.exports = {
  getConnection
}