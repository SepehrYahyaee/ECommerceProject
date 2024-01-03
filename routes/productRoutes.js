const express = require('express');
const { authentication, isAdmin } = require('../middlewares');
const { productControllers } = require('../controllers');
const router = express.Router(); // api/products

router.route('/create')
    .post(authentication, isAdmin, productControllers.createProduct);

router.route('/')
    .get(productControllers.productList);

router.route('/:productId')
    .get(productControllers.productDetails)
    .put(authentication, isAdmin, productControllers.updateProduct)
    .delete(authentication, isAdmin, productControllers.deleteProduct);

module.exports = router;