const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const connectDB = require('./db')

// to access the POST request data
const Item = require("./routes/item");

// mandatory everytime you wanna get the form data
app.use(bodyParser.urlencoded({ extended: true }))
app.set('view engine', 'ejs')
app.use(express.static('public'))

// connecting to mongoDB
connectDB()

app.use(Item);


app.listen(8080, () => {
  console.log('listening on port 8080')
})
