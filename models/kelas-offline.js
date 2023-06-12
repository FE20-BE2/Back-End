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
    createdAt: {
      type: Date,
      default: Date.now,
    },
    mentor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Mentor',
      required: true
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
  }
);

module.exports = mongoose.model('kelas-offline', kelasSchema)