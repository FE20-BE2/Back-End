const Kelas = require('../models/kelas-online');

exports.createOnlineClass = async (req, res) => {
  try {
    const { matkul, tanggalMulai, waktu } = req.body;

    const kelasBaru = new Kelas({
      matkul,
      lokasi: 'online',
      tanggalMulai,
      waktu
    });

    const savedKelas = await kelasBaru.save();
    res.status(201).json(savedKelas);
    res.status(201).json({ message: "Online class created successfully." });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


exports.getClasses = async (req, res) => {
  try {
    const kelas = await Kelas.find();
    res.json(kelas);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getClassById = async (req, res) => {
  try {
    const kelas = await Kelas.findById(req.params.id);
    if (!kelas) {
      return res.status(404).json({ message: 'Kelas tidak ditemukan' });
    }
    res.json(kelas);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateClassById = async (req, res) => {
  try {
  const { matkul, lokasi, tanggalMulai, waktu } = req.body;
  const kelas = await Kelas.findById(req.params.id);
  if (!kelas) {
    return res.status(404).json({ message: 'Kelas tidak ditemukan' });
  }
  
  kelas.matkul = matkul;
  kelas.lokasi = lokasi;
  kelas.tanggalMulai = tanggalMulai;
  kelas.waktu = waktu;
  
  const updatedKelas = await kelas.save();
  res.json({ message: 'Class Updated successfully', kelas: updatedKelas });
  } catch (error) {
    res.status(500).json({ message: error.message });
    }
    };  

exports.deleteClassById = async (req, res) => {
  try {
    const kelas = await Kelas.findById(req.params.id);

    if (!kelas) {
      return res.status(404).json({ message: 'Kelas tidak ditemukan' });
    }

    await kelas.remove();
    res.json({ message: 'Class deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
