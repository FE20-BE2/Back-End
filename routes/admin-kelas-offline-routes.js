const express = require('express');
const auth = require('../middleware/verify-token');
require('dotenv').config();

const router = express.Router();

const { 
  createOnlineClass, 
  getClasses,
  getClassById,
  updateClassById,
  deleteClassById 
} = require('../controllers/Kelas-Online-controller');

router.post('/offline', auth, createOfflineClass);

router.get('/', auth, getClasses);

router.get('/:id', auth, getClassById);

router.put('/:id', auth, updateClassById);

router.delete('//:id', auth, deleteClassById);

module.exports = router;