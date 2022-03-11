const express = require('express');
const {engine} = require('express-handlebars');
const PORT = process.env.PORT || 3000 
require('dotenv').config()
const connectDB = require('./config/db')

const app = express()

connectDB();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');


app.use(express.static(__dirname + '/static'));

app.get('/', (req, res) => {
  res.render('login');
})

app.get('/match', (req, res) => {
  res.render('match', {
  });
})

app.get('/about', (req, res) => {
  res.render('about', {
    person: {
      firstname: "Hans",
      lastname: "Anders",
    }
  });
})

app.get('*', (req, res) => {
  res.send('Error 404')
})

app.listen(PORT, () => {
  console.log(`App listening on localhost:${PORT}`)
})
