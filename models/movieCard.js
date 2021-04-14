const mongoose = require('mongoose')

const movieCardSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    quote: {
        type: String,
        required: false
    }
})

module.exports = mongoose.model('movieCard', movieCardSchema); //pass name of model: "movieCard" into the schema