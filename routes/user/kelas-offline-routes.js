const express = require('express');
require('dotenv').config();

const router = express.Router();

const { 
  getClasses
} = require('../../controllers/Kelas-Offline-controller');


router.get('/api/user/kelas-offline', getClasses);

module.exports = router;