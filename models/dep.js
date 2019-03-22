const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const depSchema = new Schema({
    name: String
});

module.exports = mongoose.model('Dep', depSchema);