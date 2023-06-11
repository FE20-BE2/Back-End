const express = require('express');
const auth = require('../middleware/verify-token');
require('dotenv').config();

const router = express.Router();

const { 
  getClasses
} = require('../controllers/Kelas-Online-controller');


router.get('/online', auth, getClasses);

module.exports = router;