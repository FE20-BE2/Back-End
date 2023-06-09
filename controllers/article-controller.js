const Article = require('../models/article')
const ArticleCategory = require('../models/article-category')
const fs = require('fs')

module.exports = {
    getAllArticles: async (req, res) => {
        try {
            const article = await Article.aggregate([
                {
                  $lookup: {
                    from: "article-categories",
                    localField: "category",
                    foreignField: "_id",
                    as: "categoryDetails",
                  },
                }, 
                {
                    $project: {
                        title: 1,
                        content: 1,
                        author: 1,
                        releaseDate: 1,
                        articleImgUrl: 1,
                        'categoryDetails.categoryName' : 1
                    }
                }
            ])
            res.status(200).json({ status: 'Success', data: article})
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    getArticleById: async (req, res) => {
        try {
            const articleId = req.params.id
            let detailArticle = await Article.findOne({ _id: articleId})

            if (!detailArticle) {
                return res.status(404).json({ message: 'Article not found' })
            }

            detailArticle = await Article.aggregate([
                {
                  $lookup: {
                    from: "article-categories",
                    localField: "category",
                    foreignField: "_id",
                    as: "categoryDetails",
                  },
                },
                {
                    $project: {
                        title: 1,
                        content: 1,
                        author: 1,
                        releaseDate: 1,
                        articleImgUrl: 1,
                        'categoryDetails.categoryName' : 1
                    }
                }
            ])

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
                articleImg: req.file.filename,
                articleImgUrl: `${req.protocol}://${req.get('host')}/uploads/article-images/${req.file.filename}`,
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

            const article = await Article.findOne({ _id: articleId })
            if (!article) {
                return res.status(404).json({ message: 'Article not found' })
            }

            const imagePath = `public/uploads/article-images/${article.articleImg}`
            fs.unlinkSync(imagePath)

            const updateDataArticle = { 
                title: req.body.title,
                content: req.body.content,
                author: req.body.author,
                category: req.body.category,
                releaseDate: req.body.releaseDate,
                articleImg: req.file.filename,
                articleImgUrl: `${req.protocol}://${req.get('host')}/uploads/article-images/${req.file.filename}`,
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
            article.articleImgUrl = updateDataArticle.articleImgUrl
            await article.save()

            res.status(201).json({ status: 'Success', message: 'Article updated successfully' })
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    deleteArticleById: async (req, res) => {
        try {
            const articleId = req.params.id
            const article = await Article.findOne({ _id: articleId})

            if (!article) {
                return res.status(404).json({ message: 'Article not found' })
            }

            const imagePath = `public/uploads/article-images/${article.articleImg}`
            fs.unlinkSync(imagePath)

            await article.deleteOne()

            res.status(200).json({ status: 'Success', message: 'Article deleted successfully'})
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
}