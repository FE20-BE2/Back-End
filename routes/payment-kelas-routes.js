const express = require('express');
require('dotenv').config();

const router = express.Router();

const { 
    getClassOrder,
    payment
} = require('../controllers/payment-controller');


router.get('/api/order', getClassOrder);
router.post('/api/order/payment', payment);

module.exports = router;
