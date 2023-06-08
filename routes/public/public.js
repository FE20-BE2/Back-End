const express = require('express');
const articleRouter = require('./article-router')
const articleCategoryRouter = require('./article-category-router')

const router = express.Router()

router.use('/api/articles', articleRouter)
router.use('/api/article-categories', articleCategoryRouter)

module.exports = router