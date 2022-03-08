const express = require('express')
const {engine} = require('express-handlebars')
const app = express()
const port = 3000

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');


app.use(express.static(__dirname + '/static'));

app.get('/', (req, res) => {
  res.render('home');
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
  res.send('404')
  
})

app.listen(port, () => {
  console.log(`Example app listening on localhost:${port}`)
})