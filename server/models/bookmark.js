const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Passport-Local Mongoose will add a username, hash and salt field to store the
// username, the hashed password and the salt value. Additionally Passport-Local
// Mongoose adds some methods to your Schema.


const Bookmark = new Schema({
    title: String,
    url: String

});


module.exports = mongoose.model('Bookmark', Bookmark);