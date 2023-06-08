const mongoose = require('mongoose');

const KelasOnlineSchema = new mongoose.Schema({
  judul: {
    type: String,
    required: true
  },
  deskripsi: {
    type: String,
    required: true
  },
  instruktur: {
    type: String,
    required: true
  },
  tanggalMulai: {
    type: Date,
    required: true
  },
  biaya: {
    type: Number,
    required: true
  },
  peserta: [{
    nama: String,
    alamatEmail: String,
    informasiKontak: String
  }],
  materiPembelajaran: [{
    judul: String,
    deskripsi: String,
    file: String
  }]
});

 module.exports = mongoose.model('KelasOnline', KelasOnlineSchema)
