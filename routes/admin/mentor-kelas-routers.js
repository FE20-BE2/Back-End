const express = require('express');
const auth = require('../../middleware/verify-token');
const upload = require('../../middleware/multer');
const authorizeAdmin = require('../../middleware/authorize-admin')
require('dotenv').config();
 
const router = express.Router();


const { 
    createMentor,
    updateMentor,
    getAllMentors,
    getMentorById,
    deleteMentor
} = require('../../controllers/mentor-kelas-controller');


router.post('/api/mentor',  auth, authorizeAdmin, upload.single('mentorImg'), createMentor);

router.put('/api/mentor/:id',  auth, authorizeAdmin, upload.single('mentorImg'), updateMentor);

router.get('/api/mentor',  auth, authorizeAdmin, getAllMentors);

router.get('/api/mentor/:id',  auth, authorizeAdmin, getMentorById);

router.delete('/api/mentor/:id',  auth, authorizeAdmin, deleteMentor);

module.exports = router;
