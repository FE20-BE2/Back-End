const express = require('express');
require('dotenv').config();

const router = express.Router();

const { 
    getOrderKelas,
    charge
} = require('../controllers/payment-controller');


router.post('/api/mentor', getOrderKelas);
router.post('/order/charge', charge);

module.exports = router;
