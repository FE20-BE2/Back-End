const Article = require('../models/article')
const ArticleCategory = require('../models/article-category')

module.exports = {
    getAllArticles: async (req, res) => {
        try {
            const article = await Article.find()
            res.status(200).json({ status: 'Success', data: article})
        } catch (error) {
            res.status(500).json({ message: 'Internal server error' });
        }
    },

    getArticleById: async (req, res) => {
        try {
            const articleId = req.params.id
            const detailArticle = await Article.findOne({ _id: articleId})

            if (!detailArticle) {
                return res.status(404).json({ message: 'Article not found' })
            }

            res.status(200).json({ status: 'Success', data: detailArticle })
        } catch (error) {
            res.status(500).json({ message: 'Internal server error' });
        }
    },

    addArticle: async (req, res) => {
        try {
            const data = { 
                title: req.body.title,
                content: req.body.content,
                author: req.body.author,
                category: req.body.category,
                releaseDate: req.body.releaseDate,
                articleImg: req.file.path,
                createdBy: req.user.userId
            }

            const articleCategory = await ArticleCategory.findOne({ _id: data.category })
            if (!articleCategory) {
                return res.status(404).json({ message: 'Article category not found' })
            }

            const newArticle = new Article ( data )
            await newArticle.save()

            res.status(201).json({ status: 'Success', message: 'Article created successfully', data: newArticle})
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    updateArticleById: async (req, res) => {
        try {
            const articleId = req.params.id
            const updateDataArticle = { 
                title: req.body.title,
                content: req.body.content,
                author: req.body.author,
                category: req.body.category,
                releaseDate: req.body.releaseDate,
                articleImg: req.file.path
            }

            const article = await Article.findOne({ _id: articleId })

            if (!article) {
                return res.status(404).json({ message: 'Article not found' })
            }

            const articleCategory = await ArticleCategory.findOne({ _id: updateDataArticle.category })
            if (!articleCategory) {
                return res.status(404).json({ message: 'Article category not found' })
            }

            article.title = updateDataArticle.title
            article.content = updateDataArticle.content
            article.author = updateDataArticle.author
            article.category = updateDataArticle.category
            article.releaseDate = updateDataArticle.releaseDate
            article.articleImg = updateDataArticle.articleImg
            await article.save()

            res.status(201).json({ status: 'Success', message: 'Article updated successfully', data: article})
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    deleteArticleById: async (req, res) => {
        try {
            const articleId = req.params.id
            const article = await Article.findOneAndDelete({ _id: articleId})

            if (!article) {
                return res.status(404).json({ message: 'Article not found' })
            }

            res.status(200).json({ status: 'Success', message: 'Article deleted successfully'})
        } catch (error) {
            res.status(500).json({ message: 'Internal server error' });
        }
    },
}