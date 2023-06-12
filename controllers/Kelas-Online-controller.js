const Kelas = require('../models/kelas-online');
const Mentor = require('../models/mentor-kelas');

exports.createOnlineClass = async (req, res) => {
  try {
    const { matkul, tanggalMulai, waktu, mentorId } = req.body;
    const mentor = await Mentor.findById(mentorId);
    if (!mentor) {
      return res.status(404).json({ message: 'Mentor not found' });
    }

    const kelasBaru = new Kelas({
      matkul,
      lokasi: 'online',
      tanggalMulai,
      waktu,
      mentor: mentor._id
    });

    const savedKelas = await kelasBaru.save();
    savedKelas.mentor = mentor;

    res.status(201).json(savedKelas);
    res.status(201).json({ message: "Online class created successfully." });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


exports.getClasses = async (req, res) => {
  try {
    const kelas = await Kelas.find().populate('mentor');
    res.json(kelas);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getClassById = async (req, res) => {
  try {
    const kelas = await Kelas.findById().populate('mentor');(req.params.id);
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
  const { matkul, lokasi, tanggalMulai, waktu, mentorId} = req.body;
  const kelas = await Kelas.findById(req.params.id);
  if (!kelas) {
    return res.status(404).json({ message: 'Kelas tidak ditemukan' });
  }
  
  if (mentorId !== kelas.mentor._id.toString()) {
    const mentor = await Mentor.findById(mentorId);
    if (!mentor) {
      return res.status(404).json({ message: 'Mentor tidak ditemukan' });
    }
    kelas.mentor = mentor._id;
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

    await kelas.deleteOne();
    res.json({ message: 'Class deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
