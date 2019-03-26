// Chat routes
const express = require('express');
const router = express.Router();
const Chat = '../models/chat';
const mongoose = require('mongoose');

// GET - get global chat
router.get('/', (req, res) => {
        console.log('get chat')
        Chat.find()
        .exec()
        .then(messages => {
            res.status(200).json({type: 'success', message: 'message received', data: messages})
        })
        .catch(err => {
            console.log('errer')
            res.status(500).json({type: 'error', message: err.message})
        })
    })
    // GET - get p2p chat
router.get('/:id', (res, req) => {
    Chat.findById(req.params.id, (err, messages) => {
        res.status(200).json(messages)
    })
})
    // POST - create a message
router.post('/', (req, res) => {
    let chat = new Chat({
        body: req.body.body
    })
    chat.save((err, newMessage) => {
        if(!err) {
            res.status(201).json({type: 'success', message: 'New chat message', data: newMessage})
        } else {
            res.status(500).json({type: 'error', message: 'chat failure', data: err})
        }
    })
})

module.exports = router;