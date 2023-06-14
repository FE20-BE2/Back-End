const express = require('express');
const auth = require('../../middleware/verify-token');
const authorizeAdmin = require('../../middleware/authorize-admin')
require('dotenv').config();

const router = express.Router();

const { 
  createOfflineClass, 
  getClasses,
  getClassById,
  updateClassById,
  deleteClassById 
} = require('../../controllers/Kelas-Offline-controller');

router.post('/api/admin-kelas-offline', auth, authorizeAdmin, createOfflineClass);

router.get('/api/admin-kelas-offline', auth, authorizeAdmin, getClasses);

router.get('/api/admin-kelas-offline/:id', auth, authorizeAdmin, getClassById);

router.put('/api/admin-kelas-offline/update/:id', auth, authorizeAdmin, updateClassById);

router.delete('/api/admin-kelas-offline/delete/:id', auth, authorizeAdmin, deleteClassById);

module.exports = router;