// CRUD create read update delete

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient 
const {MongoClient, ObjectID} = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
  if (error) {
    return console.log('unable to connect to database')
  }
  
  const db = client.db(databaseName)

  db.collection('tasks').findOne({_id: new ObjectID("5ec1e1e26ef989057452a2e8")}, (error, task) => {
    if(error) {
      return console.log("Something went wrong")
    }
    console.log(task)
  })

  // db.collection('tasks').find({description: 'finish captsone'}).toArray((error, tasks) => {
  //   console.log(tasks)
  // })


  // db.collection('users').insertOne({
  //   name: 'Kitty',
  //   age: 22
  // }, (error, result) => {
  //   if (error) {
  //     return console.log("cant do that mister")
  //   }
  //   console.log(result.ops)
  // })

  // db.collection('users').insertMany([
  //   {
  //     name: 'Jen',
  //     age: 28
  //   }, {
  //     name: 'Gunthar',
  //     age: 27
  //   }
  // ], (error, result) => {
  //   if (error) {
  //     return console.log('cannot insert that shiz my dog')
  //   }

  //   console.log(result.ops)
  // })

  // db.collection('tasks').insertMany([
  //   {
  //     description: 'make breakfast',
  //     completed: false
  //   }, {
  //     description: 'vaccum downstairs',
  //     completed: false
  //   }, {
  //     description: 'finish captsone',
  //     completed: false
  //   }
  // ], (error, result) => {
  //   if(error) {
  //     console.log("Cannot insert that, my bruda")
  //   }
  //   console.log(result.ops)
  // })
})


