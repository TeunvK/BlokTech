const express = require("express")
const movieCard = require('./../models/movieCard')
const router = express.Router()

router.get('/profileEdit', (req, res) => {
    res.render('pages/profileEdit')
})

router.get(':/id', (req, res) => {

})

router.post('/', async (req, res) => {
    const movieCard = new MovieCard({
        title: req.body.title,
        description: req.body.description,
        quote: req.body.quote
    })
    try {
        movieCard = await movieCard.save()
        res.redirect(`/movieCard/${movieCard.id}`)
    } catch (e){
        res.render('/profileEdit', {movieCard: MovieCard})
    }
})

module.exports = router