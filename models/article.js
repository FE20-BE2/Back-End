const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    },
    author: {
      type: String,
      required: true,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'Article-Category'
    },  
    releaseDate: {
      type: Date,
      required: true,
    },
    articleImg: {
      type: String,
      required: true,
    },    
    articleImgUrl: {
      type: String,
      required: true,
    }, 
    createdBy: {
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'User'
    }
  },
  { timestamps: true }
);

  module.exports = mongoose.model('Article', articleSchema)