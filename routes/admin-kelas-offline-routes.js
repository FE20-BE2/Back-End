const express = require('express');
const auth = require('../middleware/verify-token');
require('dotenv').config();

const router = express.Router();

const { 
  createOfflineClass, 
  getClasses,
  getClassById,
  updateClassById,
  deleteClassById 
} = require('../controllers/Kelas-Offline-controller');

router.post('/offline', auth, createOfflineClass);

router.get('/', auth, getClasses);

router.get('/:id', auth, getClassById);

router.put('/update/:id', auth, updateClassById);

router.delete('/delete/:id', auth, deleteClassById);

module.exports = router;