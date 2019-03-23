// DEPARTMENT 'Dep' ROUTES
const express = require('express');
const router = express.Router();
const Dep = require('../models/dep');

router.route('/')
    // GET all departments
    .get((req, res) => {
        console.log('GET /deps', req.originalUrl)
        Dep.find().populate('members').exec((err, Deps) => {
            if (!err) {
                res.status(200).json({ type:'success', message:'returned some departments', data: Deps })
            } else {
                res.status(500).json({ type: 'error', message: err.message})

            }
        })
    })
    // create one dep
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
    })
    .catch(err => {
        console.log(err)
    })
router.route('/:id')
    .get((req, res) => {
        
    })