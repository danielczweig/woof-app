const express = require('express')
const router = express.Router()
const controller = require('../db/controllers/profile.js')

router.post('/profiles', controller.saveProfile)

module.exports = router