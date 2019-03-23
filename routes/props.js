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

// GET /:id - Get one props
router.get('/:id', (req, res) => {
    Props.findById(req.params.id, (err, props) => {
        res.status(200).json(props);
    });
});

// POST - Create one props
router.post('/', (req, res) => {
    let props = new Props({
        body: req.body.body,
        from: req.body.from,
        to: req.body.to
    });
    props.save((err, newProp) => {
        res.status(201).json(newProp);
    });
})

module.exports = router;