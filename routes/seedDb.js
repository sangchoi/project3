const express = require('express');
const router = express.Router();
const mongoose = requite('mongoose');
const Dep = require('../models/dep');
const User = require('../models/user');
const Profile = require('../models/profile');
const Props = require('../models/props');

let deps = ['DevOps', 'AppSec','Sales', 'Marketing']
let depsJSON = deps.map(dep => {
        return new Dep({
            name: dep, 
            members: [] 
        })
    })

let users = ['Gavin', 'Sang', 'FX', 'Mickey', 'Owen', 'Ken', 'Charles', 'Hannah', 'Carlo', 'Garrett', 'Steve', 'Mike', 'Madison', 'Jennifer', 'Wahlid']
let userModels = deps.map(user => {
    return new User({
        name: user.name,
        email: user.name + '@ga.co',
        password: 'password()',
    })
})
let Profiles = []

router.get('/seed', (req, res) => {
    
    Dep.bulkWrite()
})