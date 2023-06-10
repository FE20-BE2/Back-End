const express = require('express')
const { getAllArticles, getArticleById, getLatestArticle } = require('../../controllers/article-controller')

const router = express.Router()

router.get('/', getAllArticles)
router.get('/latest', getLatestArticle)
router.get('/:id', getArticleById)

module.exports = router