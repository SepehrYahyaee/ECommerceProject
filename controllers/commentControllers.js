const { CommentService } = require('../services');
const commentService = new CommentService();

async function createComment(req, res){
    const {message, rating, onProduct} = req.body; //TODO: validation
    const createdComment = await commentService.createComment(message, rating, onProduct, req.user.userId);
    res.status(201).send(createdComment);
}

async function retrieveAllComments(req, res){ //TODO: pagination
    const allComments = await commentService.retrieveAllComments()
    res.status(200).send(allComments);
}

async function retrieveCommentsByUser(req, res){
    const commentsByUser = await commentService.retrieveCommentsByUserId(req.params.userId);
    res.status(200).send(commentsByUser);
}

async function retrieveCommentsOnProduct(req, res){
    const commentsOnProduct = await commentService.retrieveCommentsOnProduct(req.params.productId);
    res.status(200).send(commentsOnProduct);
}

async function retrieveSpecificComment(req, res){
    const specificComment = await commentService.retrieveCommentById(req.params.commentId);
    res.status(200).send(specificComment);
}

async function updateComment(req, res){ //TODO: validation - rating + message can be updated
    const comment = await commentService.retrieveCommentById(req.params.id);
    if (comment.byUser === req.user.userId){
        const fieldsForUpdate = {...req.body};
        const updatedComment = await commentService.updateComment(req.params.commentId, fieldsForUpdate);
        res.status(201).send(updatedComment);
    } else {
        throw new Error('not the Owner of the comment!');
    }
}

async function deleteComment(req, res){
    const comment = await commentService.retrieveCommentById(req.params.id);
    if (comment.byUser === req.user.userId){
        const deletedComment = await commentService.deleteComment(req.params.id);
        res.status(204).send(deletedComment);
    } else {
        throw new Error('not the Owner of the comment!');
    }
}

module.exports = {
    createComment,
    retrieveAllComments,
    retrieveCommentsByUser,
    retrieveCommentsOnProduct,
    retrieveSpecificComment,
    updateComment,
    deleteComment
}