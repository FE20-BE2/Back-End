const express = require('express');
const auth = require('../middleware/verify-token');
require('dotenv').config();

const router = express.Router();

const { 
  createOnlineClass, 
  createOfflineClass,
  getClasses,
  getClassById,
  updateClassById,
  deleteClassById 
} = require('../controllers/Kelas');

router.post('/online', auth, createOnlineClass);

router.post('/offline', auth, createOfflineClass);

router.get('/', auth, getClasses);

router.get('/:id', auth, getClassById);

router.put('/:id', auth, updateClassById);

router.delete('//:id', auth, deleteClassById);

module.exports = router;