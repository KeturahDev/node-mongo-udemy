// CRUD create read update delete

const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient 

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
  if (error) {
    return console.log('unable to connect to database')
  }
  
  const db = client.db(databaseName)

  db.collection('users').insertOne({
    name: 'Kitty',
    age: 22
  }, (error, result) => {
    if (error) {
      return console.log("cant do that mister")
    }
    console.log(result.ops)
  })

})


