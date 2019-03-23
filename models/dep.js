const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const depSchema = new Schema({
    name: String,
    members: [Schema.Types.ObjectId]
});

module.exports = mongoose.model('Dep', depSchema);