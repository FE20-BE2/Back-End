const mongoose = require('mongoose');

const kelasSchema = new mongoose.Schema({
    matkul: {
      type: String,
      required: true
    },
    lokasi: {
      type: String,
      required: true
    },
    tanggalMulai: {
      type: Date,
      required: true
    },
    waktu: {
      type: String,
      required: true
    },
    mentor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Mentor',
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
  }
);

module.exports = mongoose.model('kelas-offline', kelasSchema)