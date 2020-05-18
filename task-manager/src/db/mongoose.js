const mongoose = require('mongoose')
const validator = require('validator')
mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
  useNewUrlParser: true,
  useCreateIndex: true
})

const User = mongoose.model('User', {
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Email is not valid")
      }
    }
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: 7,
    validate(value) {
      if(value.toLowerCase().includes("password")) {
        throw new Error("You cannot have a password containing 'password'.")
      }
    }
  },
  age: {
    type: Number,
    default: 0,
    validate(value) {
      if(value < 0) {
        throw new Error("Age must be a positive number")
      }
    }
  }
})

const me = new User({
  name: "    Markus   ",
  email: "HEYYOMARK@gmail.com",
  password: " IlikeTurtles" 
})

// const me = new User({
//   name: 'Keturah',
//   age: 21
// })

me.save().then((me) => {
  console.log(me)
}).catch((error) => {
  console.log("Error! ",error)
})

const Task = mongoose.model('Task', {
  description: {
    type: String
  },
  completed: {
    type: Boolean
  }
})

// const chore = new Task({
//   description: "wash dishes",
//   completed: false
// })

// chore.save().then((task) => {
//   console.log(task)
// }).catch((error) => {
//   console.log("Error! ", error)
// })