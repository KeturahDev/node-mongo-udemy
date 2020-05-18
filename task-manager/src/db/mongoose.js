const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
  useNewUrlParser: true,
  useCreateIndex: true
})

const Task = mongoose.model('Task', {
  description: {
    type: String,
    trim: true,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false
  }
})




// const me = new User({
//   name: "    Markus   ",
//   email: "HEYYOMARK@gmail.com",
//   password: " IlikeTurtles" 
// })

// const me = new User({
//   name: 'Keturah',
//   age: 21
// })

// me.save().then((me) => {
//   console.log(me)
// }).catch((error) => {
//   console.log("Error! ",error)
// })




// const chore = new Task({
//   description: "   put away dishes    ",
//   // completed: false
// })

// chore.save().then((task) => {
//   console.log(task)
// }).catch((error) => {
//   console.log("Error! ", error)
// })