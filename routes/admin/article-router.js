const express = require('express')
const authenticateUser = require('../../middleware/verify-token')
const authorizeAdmin = require('../../middleware/authorize-admin')
const upload = require('../../file-upload/multer-img');

const router = express.Router()

const {
    getAllArticles,
    getArticleById,
    addArticle,
    updateArticleById,
    deleteArticleById
} = require('../../controllers/article-controller')

router.get('/', authenticateUser, authorizeAdmin, getAllArticles)
router.get('/:id', authenticateUser, authorizeAdmin, getArticleById)
router.post('/', authenticateUser, authorizeAdmin, upload.single('articleImg'), addArticle)
router.put('/:id', authenticateUser, authorizeAdmin, upload.single('articleImg'), updateArticleById)
router.delete('/:id', authenticateUser, authorizeAdmin, deleteArticleById)

module.exports = router