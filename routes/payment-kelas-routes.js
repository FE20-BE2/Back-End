const express = require('express');
const auth = require('../middleware/verify-token');
require('dotenv').config();

const router = express.Router();

const { 
    getClassOrder,
    payment
} = require('../controllers/payment-controller');


router.get('/api/order', auth, getClassOrder);
router.post('/api/order/payment', auth, payment);

module.exports = router;
