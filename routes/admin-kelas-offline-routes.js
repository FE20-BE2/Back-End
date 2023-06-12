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

router.post('/api/admin-kelas-offline', auth, createOfflineClass);

router.get('/api/admin-kelas-offline', auth, getClasses);

router.get('/api/admin-kelas-offline/:id', auth, getClassById);

router.put('/api/admin-kelas-offline/update/:id', auth, updateClassById);

router.delete('/api/admin-kelas-offline/delete/:id', auth, deleteClassById);

module.exports = router;