const express = require('express')
const authenticateUser = require('../../middleware/verify-token')
const authorizeAdmin = require('../../middleware/authorize-admin')

const router = express.Router()

const {
    getAllArticleCategories,
    getArticleCategoryById,
    addArticleCategory,
    updateArticleCategoryById,
    deleteArticleCategoryById
} = require('../../controllers/article-category-controller')

router.get('/', authenticateUser, authorizeAdmin, getAllArticleCategories)
router.get('/:id', authenticateUser, authorizeAdmin, getArticleCategoryById)
router.post('/', authenticateUser, authorizeAdmin, addArticleCategory)
router.put('/:id', authenticateUser, authorizeAdmin, updateArticleCategoryById)
router.delete('/:id', authenticateUser, authorizeAdmin, deleteArticleCategoryById)

module.exports = router;