const mongoose = require('mongoose');

const mentorSchema = new mongoose.Schema({
  nama: {
    type: String,
    required: true
  },
  spesialisasi: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Mentor', mentorSchema);
