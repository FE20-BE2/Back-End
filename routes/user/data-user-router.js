const express = require('express')
const authenticateUser = require('../../middleware/verify-token')
const upload = require('../../middleware/multer');

const router = express.Router()

const {
    getUserData,
    addUserData,
    updateUserData
} = require('../../controllers/data-user-controller')

router.get('/', authenticateUser, getUserData)
router.post('/', authenticateUser, upload.single('portfolioFile'), addUserData)
router.put('/', authenticateUser, upload.single('portfolioFile'), updateUserData)

module.exports = router