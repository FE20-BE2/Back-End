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
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Mentor', mentorSchema);
