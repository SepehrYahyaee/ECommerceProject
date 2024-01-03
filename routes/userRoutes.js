const express = require('express');
const { authentication } = require('../middlewares');
const { userControllers } = require('../controllers');
const router = express.Router(); // /api/user

router.route('/register')
    .post(userControllers.register);

router.route('/login')
    .post(userControllers.login);

router.route('/users')
    .get(userControllers.retrieveAllUsers)
    .put(authentication, userControllers.updateUser)
    .delete(authentication, userControllers.deleteUser);

router.route('/users/:id')
    .get(userControllers.retrieveSpecificUser)

module.exports = router;