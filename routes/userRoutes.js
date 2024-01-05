const express = require('express');
const { authentication } = require('../middlewares');
const { userControllers, cartControllers } = require('../controllers');
const router = express.Router(); // /api/user

router.route('/register')
    .post(userControllers.register);

router.route('/login')
    .post(userControllers.login);

router.route('/users')
    .get(authentication, userControllers.retrieveAllUsers)
    .put(authentication, userControllers.updateUser)
    .delete(authentication, userControllers.deleteUser);

router.route('/users/:id')
    .get(userControllers.retrieveSpecificUser);

router.route('/myCart')
    .get(authentication, cartControllers.showCart);

module.exports = router;