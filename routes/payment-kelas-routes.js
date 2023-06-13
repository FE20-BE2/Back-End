const express = require('express');
require('dotenv').config();

const router = express.Router();

const { 
    getOrderKelas,
    charge
} = require('../controllers/payment-controller');


router.post('/api/order', getOrderKelas);
router.post('/api/order/charge', charge);

module.exports = router;
