const express = require('express')
const authenticateUser = require('../../middleware/verify-token')
const authorizeAdmin = require('../../middleware/authorize-admin')
const upload = require('../../middleware/multer');

const router = express.Router()

const {
    addArticle,
    updateArticleById,
    deleteArticleById
} = require('../../controllers/article-controller')

router.post('/', authenticateUser, authorizeAdmin, upload.single('articleImg'), addArticle)
router.put('/:id', authenticateUser, authorizeAdmin, upload.single('articleImg'), updateArticleById)
router.delete('/:id', authenticateUser, authorizeAdmin, deleteArticleById)

module.exports = router