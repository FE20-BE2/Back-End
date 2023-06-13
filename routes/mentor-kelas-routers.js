const express = require('express');
const auth = require('../middleware/verify-token');
const upload = require('../middleware/multer');
require('dotenv').config();
 
const router = express.Router();


const { 
    createMentor,
    getAllMentors,
    getMentorById,
    deleteMentor
} = require('../controllers/mentor-kelas-controller');


router.post('/api/mentor',  auth,  upload.single('mentorImg'),  createMentor);

router.get('/api/mentor',  auth, getAllMentors);

router.get('/api/mentor/:id',  auth, getMentorById);

router.delete('/api/mentor/:id',  auth, deleteMentor);

module.exports = router;
