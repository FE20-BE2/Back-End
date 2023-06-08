const express = require('express');
const articleRouter = require('./article-router')
const articleCategoryRouter = require('./article-category-router')

const router = express.Router()

router.use('/api/admin/articles', articleRouter)
router.use('/api/admin/article-categories', articleCategoryRouter)

module.exports = router