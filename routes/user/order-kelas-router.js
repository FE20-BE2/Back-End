const express = require('express')
const authenticateUser = require('../../middleware/verify-token')
const upload = require('../../middleware/multer');

const router = express.Router()

const {
    addUserData
} = require('../../controllers/data-user-controller')

router.post('/api/order-kelas', authenticateUser, upload.single('portfolioFile'), addUserData)

module.exports = router