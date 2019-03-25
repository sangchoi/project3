const express = require('express');
const router = express.Router();
const User = require('../models/user');
const Props = require('../models/props')



// GET /user - Get all users in the organization
router.get('/', (req, res) => {
    User.find({}, (err, users) => {
        console.log("THESE ARE ALL THE USERS:", users)
        if (!err) {
            res.status(200).json(users);
        } else {
            res.status(500).json(err);
        }
    })
})


// GET /users/:id - Get one user
router.get('/:id', (req, res) => {
    User.findById(req.params.id).populate('profiles').exec( (err, user) => {
        if(!err) {
            res.status(200).json(user);
        } else {
            res.status(500).json(err);
        }
    })
})
// GET /users/:id/props -- get one user's props
router.get('/:id/props', (req, res) => {
    console.log('GET /users/:id/props', req.originalUrl)
    Props.find({ $or: [{ from: req.params.id }, { to: req.params.id }] })
    .populate({ path: 'from', populate: 'profile' })
    .populate({ path: 'to', populate: 'profile' })
    .exec(( err, props ) => {
        if (!err) {
            console.log('got props back', props)
            res.json({ type: 'success', message:'props found', data: props })
        } else {
            console.log(err)
            res.status(500).json({ type: 'error', message: 'there was an error getting your props', data: err })
        }
    })
})


// POST /users - Create one user
router.post('/', (req, res) => {
    let user = new User({
        name: req.body.name,
        password: req.body.password,
        email: req.body.email
    });
    user.save((err, newUser) => {
        res.status(201).json(newUser)
    })
})

module.exports = router;