const express = require('express')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json()) //auto parses inciming json requests so we can use it in our handlers

app.post('/users', (req, res) => {
  console.log(req.body)
  res.send('testing!')
})

app.listen(port, () => { 
  console.log('Server is up and running ' + port)
})