const express = require('express');
const router = express.Router();
const User = require('..models/user');


// GET /users - Get all users in the organization
router.get('/users', (req, res) => {
    User.find({}, (err, users) => {
        if (!err) {
            res.status(200).json(users);
        } else {
            res.status(500).json(err);
        }
    })
})


// GET /users/:id - Get one user
router.get('/users/:id', (req, res) => {
    User.findById(req.params.id).populate('profile').exec( (err, user) => {
        if(!err) {
            res.status(200).json(user);
        } else {
            res.status(500).json(err);
        }
    })
})


// POST /users - Create one user
router.post('/users', (req, res) => {
    let user = new User({
        name: req.body.name,
        password: req.body.password,
        email: req.body.email
    });
    user.save((err, newUser) => {
        res.status(201).json(newUser)
    })
})
