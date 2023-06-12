const express = require('express');
const express = require('express');
const auth = require('../middleware/verify-token');
require('dotenv').config();

const router = express.Router();


const { 
    createMentor,
    getAllMentors,
    getMentorById,
    deleteMentor
} = require('../controllers/mentor-kelas-controller');




router.post('/',  auth, createMentor);

router.get('/',  auth, getAllMentors);

router.get('/:id',  auth, getMentorById);

router.delete('/:id',  auth, deleteMentor);

module.exports = router;
