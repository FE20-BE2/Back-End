const express = require('express');
require('dotenv').config();

const router = express.Router();

const { 
  register, 
  login, 
} = require('../../controllers/users-controller');

router.post('/signup', register);
router.post('/signin', login);

module.exports = router;