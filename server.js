const express = require('express');
const profileRouter = require('./routes/profileContent')
const app = express();
const ejs = require('ejs');
const {MongoClient} = require("mongodb");                                                            // Curly brackets zorgen voor "destructuring", available as "MongoClient"
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");

//Set view engine to ejs
app.set('view engine', 'ejs');

//Serve images/Css/Js
app.use(express.static('public'));

app.use(express.urlencoded({extended: false}))

//Use router
app.use('/', profileRouter)

//Connect to database                                                                                                                                  
const uri = process.env.ATLAS_URI;
mongoose.connect(uri,{useNewUrlParser: true, useUnifiedTopology: true});





app.get('/', (req, res) => {
    res.render('pages/index');
})

app.get('/profile', (req, res) => {
    const movieCards = [{
            title: "Event horizon",
            description: "this a the description about the movie",
            quote: "Let there be lightman"
        },
        {
            title: "Forrest gump",
            description: "RUN FORREST!",
            quote: "Boy oh Boy"
        }
    ]
    res.render('pages/profile', {
        movieCards: movieCards
    })
})

app.get('/login', (req, res) => {
    res.render('pages/login');
})

app.use((req, res) => {
    console.log(e)
    res.status(404).send("Hmmmpf, something went wrong");
})

app.listen(1900, () => {
    console.log('go to localhost:1900');
});