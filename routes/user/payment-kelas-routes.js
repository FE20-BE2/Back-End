const express = require('express');
const auth = require('../../middleware/verify-token');
const authorizeAdmin = require('../../middleware/authorize-admin')
const upload = require('../../middleware/multer');
require('dotenv').config();

const router = express.Router();

const { 
    getClassOrder,
    payment,
    orderKelas
} = require('../../controllers/payment-controller');


router.get('/api/order', auth, authorizeAdmin, getClassOrder);
router.post('/api/order/payment', auth, payment);
router.post('/api/order-kelas', auth, upload.single('portfolioFile'), orderKelas)

module.exports = router;
 