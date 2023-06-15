const express = require('express')
const authenticateUser = require('../../middleware/verify-token')
const upload = require('../../middleware/multer');

const router = express.Router()

const {
    createClassOrder
} = require('../../controllers/payment-controller')

router.post('/api/order-kelas', authenticateUser, upload.single('portfolioFile'), createClassOrder)

module.exports = router