const mongoose = require("mongoose");

//Define a schema
const userSchema = new mongoose.Schema({
        name:{
                type: String,
                required: true
        },
        age: {
                type: Number
        }
});

//compile schema into model
module.exports = mongoose.model('user', userSchema); 