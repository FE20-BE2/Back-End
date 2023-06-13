const express = require('express');
require('dotenv').config();

const router = express.Router();

const { 
    getClassOrder,
    charge
} = require('../controllers/payment-controller');


router.post('/api/order', getClassOrder);
router.post('/api/order/charge', charge);

module.exports = router;
