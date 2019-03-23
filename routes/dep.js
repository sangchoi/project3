// DEPARTMENT 'Dep' ROUTES
const express = require('express');
const router = express.Router();
const Dep = require('../models/dep');
const Props = require('../models/props')
const mongoose = require('mongoose')

router.route('/')
    // GET all departments, return 200, array of deps
    .get((req, res) => {
        console.log('GET /deps', req.originalUrl)
        Dep.find().populate('members').exec((err, Deps) => {
            if (!err) {
                res.status(200).json({ type:'success', message:'returned some departments', data: Deps })
            } else {
                res.status(500).json({ type: 'error', message: err.message})

            }
        })
        .catch(err => {
            console.log(err)
        })
    })
    // create one dep, return 201, no data
    .post((req, res) => {
        console.log('POST /deps', req.originalUrl)
        Dep.create({
            name: req.body.name,
            members: req.body.members
        }, (err, dep) => {
            console.log('response from db: ', { err, dep })
            // if there's no error:
            if (!err) {
                res.status(201).json({type: 'success', message:'dep creation successful'})
            // if there is an error:
            } else {
                res.status(500).json({ type: 'error', message:'dep creation failed' })
            }
        })
        .catch(err => {
            console.log(err)
        })
    })

router.route('/:id')
    // get one dep, return 200, one dep
    .get((req, res) => {
        console.log('/deps/:id', req.body.originalUrl)
        Dep.findById(req.params.id, (err, dep) => {
            // if no error, send back the department without any population
            if(!err) {
                res.status(200).json({ type: 'success', message: 'department found', data: dep})
            } else {
                res.status(500).json({ type: 'error', message: 'department not found' })
            }
        })
        .catch(err => {
            console.log(err)
        })
    })
    .put((req, res) => {
        // update one dep, return 203, no data
        Dep.findByIdAndUpdate({
            name: req.body.name,
            members: req.body.name
        }, {
            new: true
        }, (err, dep) => {
            if (!err) {
                res.status(203).json({ type: 'success', message: 'update successful' })
            } else {
                res.status(500).json({ type: 'error', message: 'error during update', data: err })
            }
        })
        .catch(err => {
            console.log(err)
        })
    })
    // get one dep and its users
router.get('/:id/users', (req, res) => {
    // get one dep with users: return 200, dep with users
    Dep.findById(req.params.id).populate('members').exec((err, dep) => {
        if (!err) {
            res.status(200).json({ type: 'success', message: 'request for dep and users successful', data: dep })
        } else {
            res.status(500).json({ type: 'error', message: 'request for dep and users resulted in an error', data: err})
        }
    })
    .catch(err => {
        console.log(err)
    })
})
router.get('/:id/users/props', (req, res) => {
    // get one dep, return 200, its users and their props
    Dep.findById(req.params.id).populate({ path: 'members'}).exec((err, dep) => {
        // get the dep and its users
        if (!err) {
            // get all of the props for each user
            let userIds = dep.members.map(user => {
                mongoose.Types.ObjectId(user._id)
            })
            Props.find({
                from: { $in: userIds },
                to: { $in: userIds }
            }, (err, props) => {
                if (!err) {
                    res.status(200).json({ type: 'success', message: 'returning all users and their props in this dept', data: { dep, props }})
                } else {
                    console.log(err)
                    res.status(500).json({ type: 'error', message: 'there was an error retrieving the props from this dept'})
                }
            })
        } else {
            res.status(500).json({ type: 'error', message: 'there was an error retrieving the users in this dept'})
        }
    })
    .catch(err => {
        console.log(err)
    })
})