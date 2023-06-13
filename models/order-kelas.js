const mongoose = require('mongoose');

const dataUserSchema = new mongoose.Schema({
    fullName: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    noPhone: {
      type: String,
      required: true,
    },
    birthPlace: {
        type: String,
        required: true,
    },  
    birthDate: {
      type: Date,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    school: {
      type: String,
      required: true,
    },    
    instagram: {
      type: String,
      required: true,
    }, 
    address: {
        type: String,
        required: true,
    },
    midtransResponse: {
        type: String
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User'
    }, 
  },
  { timestamps: true }
);

module.exports = mongoose.model('Order-Kelas', dataUserSchema)