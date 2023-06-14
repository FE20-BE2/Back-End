const express = require('express');
const auth = require('../../middleware/verify-token');
const authorizeAdmin = require('../../middleware/authorize-admin')
require('dotenv').config();

const router = express.Router();

const { 
  createOnlineClass, 
  getClasses,
  getClassById,
  updateClassById,
  deleteClassById 
} = require('../../controllers/Kelas-Online-controller');

router.post('/api/admin-kelas-online', auth, authorizeAdmin, createOnlineClass);

router.get('/api/admin-kelas-online', auth, authorizeAdmin, getClasses);

router.get('/api/admin-kelas-online/:id', auth, authorizeAdmin, getClassById);

router.put('/api/admin-kelas-online/update/:id', auth, authorizeAdmin, updateClassById);

router.delete('/api/admin-kelas-online/delete/:id', auth, authorizeAdmin, deleteClassById);

module.exports = router;