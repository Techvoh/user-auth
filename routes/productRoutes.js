const express = require('express')
const { uploadProduct, getAllProducts } = require('../controller/productController');

const router = express.Router();

router.post('/upload/:userId', uploadProduct);
router.get('/getALL', getAllProducts);

module.exports = router;