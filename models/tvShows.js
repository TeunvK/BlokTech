const mongoose = require("mongoose");

//Define a schema
const tvshowSchema = new mongoose.Schema({
        name:{
                type: String,
                required: true
        },
        image: {
                type: String
        }
});

//compile schema into model
module.exports = mongoose.model('tvshow', tvshowSchema, "TvShows"); 