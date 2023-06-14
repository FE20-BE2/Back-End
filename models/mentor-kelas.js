const mongoose = require('mongoose');

const mentorSchema = new mongoose.Schema({
  nama: {
    type: String,
    required: true
  },
  spesialisasi: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  photo: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now,
    ref: 'User'
  },
  updatedAt: {
    type: Date,
    default: Date.now,
    ref: 'User'
  },
});

module.exports = mongoose.model('Mentor', mentorSchema);
