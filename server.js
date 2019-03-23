require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const expressJWT = require('express-jwt');
const RateLimit = require('express-rate-limit');


const app = express();
app.use(express.urlencoded({extended: false}));
app.use(express.json());

const loginLimiter = new RateLimit({
    windowMs: 5 * 60 * 1000, // 5 minutes
    max: 3, 
    delayMs: 0, // disabled
    message: JSON.stringify({type: 'error', message: "Maximum login attempts exceeded!" })
})

const signupLimiter = new RateLimit({
    windowMs: 60 * 60 * 1000,
    max: 3,
    delayMs: 0, // disabled
    message: JSON.stringify({type: 'error', message: 'Account creation maximum exceeded!' })
})

mongoose.connect('mongodb://localhost/' + process.env.PROPS_DB, {useNewUrlParser: true});
const db = mongoose.connection;
db.on('open', () => {
    console.log(`Connected to Mongo on ${db.host}: ${db.port}`)
})
db.on('error', (err) => {
    console.log(`Database error:\n${err}`)
})

// rate limiters
app.use('/auth/login', loginLimiter);
app.use('/auth/signup', signupLimiter);

// protects resources from non-token bearers
app.use('/locked', expressJWT({ secret: process.env.JWT_SECRET }).unless({method: 'POST'}, require('./routes/locked')))

// controller mounts
app.use('/auth', require('./routes/auth'))
app.use('/user', require('./routes/user'));
app.use('/api/deps', require('./routes/dep'))


app.listen(process.env.EXPRESS_PORT, () => {
    console.log(`You're listening to the sweet sounds of ${process.env.EXPRESS_PORT} PROPS in the morning...`)
    console.log(`Oh, and the port is`, process.env.EXPRESS_PORT)
})