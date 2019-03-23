// PROFILE routes
const router = require('express').Router();
const Profile = require('../models/profile');

router.route('/:id/profile')
    .get((req, res) => {
        console.log( 'GET /users/:id/profile', req.originalUrl )
        Profile.findById(req.params.id)
        .populate('user')
        .exec( (err, profile) => {
            if (!err) {
                console.log('got back from the database', { err, profile })
                res.status(200).json({ type: 'success', message: 'got profile and its associated user', profile })
            } else {
                console.log('error', err)
                res.status(500).json({ type: 'error', message: err.message })
            }
        }).catch(err => {
            console.log(err)
        })
    })
    .put((req, res) => {
        console.log('PUT /users/:id/profile', req.originalUrl)
        Profile.findByIdAndUpdate( req.params.id, { interests, photo, groups }, (err, res) => {
            if (!err) {
                res.status(204).json({ type: 'success', message: 'successfully updated profile' })
            } else {
                res.status(500).json( { type: 'error', message: err.message } )
            }
        })
        .catch(err => {
            console.log(err)
        })
    })

module.exports = router;