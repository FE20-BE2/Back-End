const ArticleCategory = require('../models/article-category')

module.exports = {
    getAllArticleCategories: async (req, res) => {
        try {
            const articleCategories = await ArticleCategory.find()
            res.status(200).json({ status: 'Success', data: articleCategories})
        } catch (error) {
            res.status(500).json({ message: 'Internal server error' });
        }
    },

    getArticleCategoryById: async (req, res) => {
        try {
            const articleCategoryId = req.params.id
            const detailArticleCategory = await ArticleCategory.findOne({ _id: articleCategoryId})

            if (!detailArticleCategory) {
                return res.status(404).json({ message: 'Article category not found' })
            }

            res.status(200).json({ status: 'Success', data: detailArticleCategory})
        } catch (error) {
            res.status(500).json({ message: 'Internal server error' });
        }
    },

    addArticleCategory: async (req, res) => {
        try {
            const { categoryName } = req.body

            const existingCategory = await ArticleCategory.findOne({ categoryName })
            if (existingCategory) {
                return res.status(409).json({ message: 'Category already existed' })
            }

            const newArticleCategory = new ArticleCategory ({
                categoryName,
                createdBy: req.user.userId
            })

            await newArticleCategory.save()

            res.status(201).json({ status: 'Success', message: 'Article Category created successfully', data: newArticleCategory})
        } catch (error) {
            res.status(500).json({ message: 'Internal server error' });
        }
    }, 

    updateArticleCategoryById: async (req, res) => {
        try {
            const articleCategoryId = req.params.id
            const { categoryName } = req.body

            const articleCategory = await ArticleCategory.findOne({ _id: articleCategoryId })

            if (!articleCategory) {
                return res.status(404).json({ message: 'Article category not found' })
            }

            articleCategory.categoryName = categoryName
            await articleCategory.save()

            res.status(200).json({ status: 'Success', message: 'Article Category updated successfully', data: articleCategory})
        } catch (error) {
            res.status(500).json({ message: 'Internal server error' });
        }
    },

    deleteArticleCategoryById: async (req, res) => {
        try {
            const articleCategoryId = req.params.id
            const articleCategory = await ArticleCategory.findOneAndDelete({ _id: articleCategoryId})

            if (!articleCategory) {
                return res.status(404).json({ message: 'Article category not found' })
            }

            res.status(200).json({ status: 'Success', message: 'Article category deleted successfully'})
        } catch (error) {
            res.status(500).json({ message: 'Internal server error' });
        }
    },
}