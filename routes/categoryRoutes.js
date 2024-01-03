const express = require('express');
const { authentication, isAdmin } = require('../middlewares');
const { categoryControllers } = require('../controllers');
const router = express.Router(); // api/category

router.route('/create')
    .post(authentication, isAdmin, categoryControllers.createCategory);

router.route('/')
    .get(categoryControllers.retrieveAllCategories);

router.route('/:categoryId')
    .get(categoryControllers.retrieveSpecificCategory)
    .put(authentication, isAdmin, categoryControllers.updateCategory)
    .delete(authentication, isAdmin, categoryControllers.deleteCategory);

module.exports = router;