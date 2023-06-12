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

router.post('/api/admin-kelas-online', auth, createOnlineClass);

router.get('/api/admin-kelas-online', auth, getClasses);

router.get('/api/admin-kelas-online/:id', auth, getClassById);

router.put('/api/admin-kelas-online/update/:id', auth, updateClassById);

router.delete('/api/admin-kelas-online/delete/:id', auth, deleteClassById);

module.exports = router;