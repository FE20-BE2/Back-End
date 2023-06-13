const express = require('express')
const authenticateUser = require('../../middleware/verify-token')
// const upload = require('../../middleware/file-upload/multer-file')

const router = express.Router()

const {
    getUserData,
    addUserData,
    updateUserData
} = require('../../controllers/data-user-controller')

router.get('/', authenticateUser, getUserData)
router.post('/', authenticateUser, addUserData)
router.put('/', authenticateUser, updateUserData)

module.exports = router