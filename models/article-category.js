const mongoose = require('mongoose');

const articleCategorySchema = new mongoose.Schema({
    category_name: {
      type: String,
      required: true
    },
    created_by: {
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'User'
    },  
    createdAt: {
      type: Date,
      default: Date.now
    },
    updatedAt: {
      type: Date,
      default: Date.now
    }
  });

  module.exports = mongoose.model('Article-Category', articleCategorySchema)