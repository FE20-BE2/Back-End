const Article = require('../models/article')
const ArticleCategory = require('../models/article-category')
const mongoose = require('mongoose')
const fs = require('fs')

module.exports = {
    getAllArticles: async (req, res) => {
        try {
            let articles
            const categoryName = req.query.categoryName

            if (categoryName) {
                articles = await Article.aggregate([
                    {
                      $lookup: {
                        from: "article-categories",
                        localField: "category",
                        foreignField: "_id",
                        as: "categoryDetails",
                      },
                    },
                    {
                        $match: { 
                            'categoryDetails.categoryName': categoryName
                        },
                    },
                    {
                        $project: {
                            title: 1,
                            content: 1,
                            author: 1,
                            releaseDate: 1,
                            timesRead: 1,
                            articleImgUrl: 1,
                            'categoryDetails.categoryName': 1
                        }
                    }
                ])
            } else {
                articles = await Article.aggregate([
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
                            timesRead: 1,
                            articleImgUrl: 1,
                            'categoryDetails.categoryName' : 1
                        }
                    }, 
                ])
            }

            if (articles.length === 0) {
                return res.status(404).json({ message: 'No data' })
            }

            res.status(200).json({ status: 'Success', data: articles})
        } catch (error) {
            res.status(500).json({ message: 'Internal server error' });
        }
    },

    getLatestArticle: async (req, res) => {
        try {
            const limit = parseInt(req.query.limit) || 3;

            const latestArticle = await Article.aggregate([
                {
                    $sort: {
                        releaseDate: -1
                    }
                },
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
                        timesRead: 1,
                        articleImgUrl: 1,
                        'categoryDetails.categoryName' : 1
                    }
                }, 
                {
                    $limit: limit
                }
            ])

            if (latestArticle.length === 0) {
                return res.status(404).json({ message: 'Article not found' })
            }

            res.status(200).json({ status: 'Success', data: latestArticle })
        } catch (error) {
            res.status(500).json({ message: 'Internal server error' });
        }
    },

    getArticleById: async (req, res) => {
        try {
            const articleId = req.params.id

            const detailArticle = await Article.aggregate([
                {
                    $match: { 
                        _id: mongoose.Types.ObjectId.createFromHexString(articleId) 
                    },
                },
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
                        timesRead: 1,
                        articleImgUrl: 1,
                        'categoryDetails.categoryName' : 1
                    }
                }, 
                { $limit: 1 }
            ])

            if (detailArticle.length === 0) {
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
                timesRead: req.body.timesRead,
                articleImg: req.file.filename,
                articleImgUrl: `${req.protocol}://${req.get('host')}/uploads/article-images/${req.file.filename}`,
                createdBy: req.user.userId,
                updatedBy: req.user.userId
            }

            const articleCategory = await ArticleCategory.findOne({ _id: data.category })
            if (!articleCategory) {
                return res.status(404).json({ message: 'Article category not found' })
            }

            const newArticle = new Article ( data )
            await newArticle.save()

            res.status(201).json({ status: 'Success', message: 'Article created successfully', data: newArticle})
        } catch (error) {
            res.status(500).json({ message: 'Internal server error' });
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
                timesRead: req.body.timesRead,
                articleImg: req.file.filename,
                articleImgUrl: `${req.protocol}://${req.get('host')}/uploads/article-images/${req.file.filename}`,
                updatedBy: req.user.userId
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
            article.updatedBy = updateDataArticle.updatedBy
            await article.save()

            res.status(200).json({ status: 'Success', message: 'Article updated successfully' })
        } catch (error) {
            res.status(500).json({ message: 'Internal server error' });
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
            res.status(500).json({ message: 'Internal server error' });
        }
    },
}