const mongoose = require('mongoose');

const articleCategorySchema = new mongoose.Schema({
    categoryName: {
      type: String,
      required: true
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'User'
    }
  },
  { timestamps: true }
);

  module.exports = mongoose.model('Article-Category', articleCategorySchema)