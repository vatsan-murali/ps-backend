const express = require('express')
const router = express.Router();
const User = require("../models/userSchema");
const checkRole = require('../middleware/checkRole')

// Admin Profile

router.get('/adminProf', async(req, res) => {
    const {username, email, } = req.body
})

// Upload Table

router.post('/adminTable', async(req, res) => {
    const {ID, COUNTRY, RESEARCHTITLE, UNIVERSITY, TAGS, LINK} = req.body 
    
})

