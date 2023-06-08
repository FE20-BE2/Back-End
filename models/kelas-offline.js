const mongoose = require('mongoose');

const KelasOfflineSchema = new mongoose.Schema({
  tanggal: {
    type: Date,
    required: true
  },
  waktu: {
    type: String,
    required: true
  },
  lokasi: {
    type: String,
    required: true
  },
  topik: {
    type: String,
    required: true
  },
  peserta: [{
    nama: String,
    alamat: String,
    nomorTelepon: String,
    email: String
  }]
});

module.exports = mongoose.model('KelasOffline', KelasOfflineSchema)
