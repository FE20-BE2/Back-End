const Mentor = require('./path/to/mentor-kelas');

exports.createMentor = async function (req, res) {
  try {
    const { nama, spesialisasi } = req.body;
    const mentor = new Mentor({ nama, spesialisasi });
    const createdMentor = await mentor.save();
    res.status(201).json({ message: 'Mentor created successfully', data: createdMentor });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllMentors = async function (req, res) {
  try {
    const mentors = await Mentor.find();
    res.status(200).json({ message: 'Successfully retrieved all mentors', data: mentors });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getMentorById = async function (req, res) {
  try {
    const mentor = await Mentor.findById(req.params.id);
    if (!mentor) {
      return res.status(404).json({ message: 'Mentor not found' });
    }
    res.status(200).json({ message: 'Successfully retrieved mentor', data: mentor });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteMentor = async function (req, res) {
  try {
    const mentor = await Mentor.findByIdAndRemove(req.params.id);
    if (!mentor) {
      return res.status(404).json({ message: 'Mentor not found' });
    }
    res.status(200).json({ message: 'Mentor deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};