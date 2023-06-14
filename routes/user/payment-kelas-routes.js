const express = require('express');
const auth = require('../../middleware/verify-token');
const authorizeAdmin = require('../../middleware/authorize-admin')
const upload = require('../../middleware/multer');
require('dotenv').config();

const router = express.Router();

const { 
    getClassOrder,
    payment
} = require('../../controllers/payment-controller');


router.get('/api/order', auth, authorizeAdmin, upload.single('portfolioFile'), getClassOrder);
router.post('/api/order/payment', auth, upload.single('portfolioFile'), payment);

module.exports = router;
 