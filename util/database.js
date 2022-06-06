const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const mongoConnect = callback => {
    MongoClient.connect(
      'mongodb+srv://yif003:Apple007@cluster0.16nk6.mongodb.net/?retryWrites=true&w=majority'
    )
      .then(client => {
        console.log('Connected!');
        callback(client);
      })
      .catch(err => {
        console.log(err);
      });
  };
  
  module.exports = mongoConnect;