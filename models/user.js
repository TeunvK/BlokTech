const mongoose = require("mongoose");

//Define a schema
const userSchema = new mongoose.Schema({
        name:{
                type: String,
                required: true
        },
        age: {
                type: Number
        },
        about:{
                type: String
        },
        favShows:[{
                type: mongoose.Schema.Types.ObjectId
        }],
        matches:[{
                type: mongoose.Schema.Types.ObjectId
        }]
});


//compile schema into model
module.exports = mongoose.model('user', userSchema); 