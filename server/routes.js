const express = require('express')
const router = express.Router()
const controller = require('../db/controllers/profile.js')

router.get('/profiles', controller.getProfiles)

router.post('/profiles', controller.createProfile)

module.exports = router