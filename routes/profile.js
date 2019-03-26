// PROFILE routes
const router = require('express').Router();
const Profile = require('../models/profile');
const User = require('../models/user')

router.route('/:id/profile')
    .get((req, res) => {
        console.log( 'GET /user/:id/profile', req.originalUrl )
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
    .post((req, res) => {
        // make a new profile, return 201 and no data
        console.log( 'POST /user/:id/profile', req.originalUrl)
        Profile.create({
            photo: req.body.photo,
            interests: req.body.interests,
            group: req.body.group,
            user: req.body.user,
        }, (err, profile) => {
            console.log('return from Profile.create', err, profile)
            if (!err) {
                User.findByIdAndUpdate(req.params.id, {
                    profile: profile._id
                }, (err, user) => {
                    if (!err) {
                        res.json({type: 'success', message: 'successfully created user profile', data: { user, profile }})
                    } else {
                        res.status(500).json({type: 'error', message: 'there was an error adding profile to your user', data: err})
                    }
                })
            } else {
                res.status(500).json({type: 'error', message: 'there was an error during profile creation', data: err})
            }
        })
    })
    .put((req, res) => {
        console.log('PUT /user/:id/profile', req.originalUrl)
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