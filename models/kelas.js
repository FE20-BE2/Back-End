const mongoose = require('mongoose');

const kelasSchema = new mongoose.Schema({
    nama: {
      type: String,
      required: true
    },
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
    }
  });

module.exports = mongoose.model('kelas', kelasSchema)