const express = require('express')
const authenticateUser = require('../../middleware/verify-token')
const authorizeAdmin = require('../../middleware/authorize-admin')

const router = express.Router()

const {
    addArticleCategory,
    updateArticleCategoryById,
    deleteArticleCategoryById
} = require('../../controllers/article-category-controller')

router.post('/', authenticateUser, authorizeAdmin, addArticleCategory)
router.put('/:id', authenticateUser, authorizeAdmin, updateArticleCategoryById)
router.delete('/:id', authenticateUser, authorizeAdmin, deleteArticleCategoryById)

module.exports = router;