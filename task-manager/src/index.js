const express = require('express')
require('./db/mongoose') // connects mongoose to the database
const User = require("./models/user")

const app = express()
const port = process.env.PORT || 3000

app.use(express.json()) //auto parses inciming json requests so we can use it in our handlers

app.post('/users', (req, res) => {
  const user = new User(req.body)

  user.save().then(() => {
    res.send(user)
  }).catch((e) => {
    res.status(400).send(e)
  })
})

app.listen(port, () => { 
  console.log('Server is up and running ' + port)
})