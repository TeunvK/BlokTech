const express = require('express')
const app = express()


//Serve images/Css/Js
app.use(express.static('public'))




app.get('/', (req, res) =>{
    res.send('<h1>Hello</h1>\n');
})

app.get('/home', (req, res)=>{
    res.send('<h1>Welcome on the homepage</h1>\n');
})

app.get('/about', (req, res)=>{
    res.send('<h1>this is the about</h1>\n');
})


app.use((req, res) => {
    res.status(404).send("Pagina niet gevonden");
})

app.listen(1900, () => {
    console.log('go to localhost:1900');
    }); 