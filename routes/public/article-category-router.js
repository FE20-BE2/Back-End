const express = require('express')
const { getAllArticleCategories, getArticleCategoryById } = require('../../controllers/article-category-controller')

const router = express.Router()

router.get('/', getAllArticleCategories)
router.get('/:id', getArticleCategoryById)

module.exports = router