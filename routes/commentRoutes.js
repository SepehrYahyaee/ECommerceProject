const express = require('express');
const { authentication, isAdmin } = require('../middlewares');
const { commentControllers } = require('../controllers');

const router = express.Router(); // /api/comments

router.route('/create')
    .post(authentication, commentControllers.createComment);

router.route('/')
    .get(authentication, isAdmin, commentControllers.retrieveAllComments);

router.route('/myComments')
    .get(authentication, commentControllers.retrieveCommentsByUser);

router.route('/onProduct/:productId')
    .get(commentControllers.retrieveCommentsOnProduct);

router.route('/:commentId')
    .get(commentControllers.retrieveSpecificComment)
    .put(authentication, commentControllers.updateComment)
    .delete(authentication, commentControllers.deleteComment);

module.exports = router;