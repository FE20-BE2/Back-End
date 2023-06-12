const express = require('express')
const userDataRouter = require('./data-user-router')

const router = express.Router()

router.use('/api/users/data-users', userDataRouter)

module.exports = router