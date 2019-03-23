// PROPS routes
const express = require('express');
const router = express.Router();
const Props = require('../models/props');

router.route('/')
    // get all props
    .get((req, res) => {
        console.log('GET /props')
        Props.find()
        .exec()
        .then(props => {
            res.status(200).json({type: 'success', message: 'got props', data: props})
        })
        .catch(err => {
            console.log('error')
            res.status(500).json({type: 'error', message: err.message})
        })
    })

module.exports = router;