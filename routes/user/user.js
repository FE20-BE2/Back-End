const express = require('express')
const userRouter = require('./login-register-router')
const userDataRouter = require('./data-user-router')

const router = express.Router()

router.use('/api/users/data-users', userDataRouter)
router.use('./api/users', userRouter)

module.exports = router