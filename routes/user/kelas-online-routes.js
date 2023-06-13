const express = require('express');
require('dotenv').config();

const router = express.Router();

const { 
  getClasses
} = require('../../controllers/Kelas-Online-controller');


router.get('/api/user/kelas-online', getClasses);

module.exports = router;