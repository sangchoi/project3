const mongoose = require('mongoose');
const Schema = mongoose.Schema;

cosnt profileSchema = new Schema({
    interests: String,
    photo: String,
    groups: String
})

module.exports = mongoose.model('profile', profileSchema);