const express = require('express');
const auth = require('../middleware/verify-token');
require('dotenv').config();

const router = express.Router();

const { 
  getClasses
} = require('../controllers/Kelas-Online-controller');


router.get('/api/user/kelas/online', auth, getClasses);

module.exports = router;