// PROPS MODEL
const mongoose = require('mongoose')

const propsSchema = new mongoose.Schema({
    body: {
        type: String,
        required: [true, 'Your props must have a message']
    },
    from: {
        type: String, 
        required: [true, 'Your props must have a sender']
    },
    to: {
        type: String,
        required: [true, 'Your props must have a recipient']
    }

}, { timestamps: true }) // add createdAt and updatedAt

module.exports = mongoose.model('Props', propsSchema)