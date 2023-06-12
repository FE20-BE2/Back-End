const express = require('express');
const auth = require('../middleware/verify-token');
require('dotenv').config();

const router = express.Router();

const { 
  getClasses
} = require('../controllers/Kelas-Offline-controller');


router.get('/api/user/kelas-offline', auth, getClasses);

module.exports = router;