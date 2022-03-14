const mongoose = require("mongoose");

//Define a schema
const userSchema = new mongoose.Schema({
    user: {
        name: String,
        age: Number
    }
});


//compile schema into model
const User = mongoose.model('user', userSchema);

module.exports = User;