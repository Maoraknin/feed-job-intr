const logger = require('../../services/logger.service')
// const userService = require('../user/user.service')
// const authService = require('../auth/auth.service')
// const socketService = require('../../services/socket.service')
const commentService = require('./comment.service')

async function getComments(req, res) {
    try {
        const comments = await commentService.query(req.query)
        res.send(comments)
    } catch (err) {
        logger.error('Cannot get comments', err)
        res.status(500).send({ err: 'Failed to get comments' })
    }
}

async function addComment(req, res) {
     
    try {
        var comment = req.body
        comment = await commentService.add(comment)
        res.send(comment)
    } catch (err) {
        logger.error('Failed to add comment', err)
        res.status(500).send({ err: 'Failed to add comment' })
    }
}

module.exports = {
    getComments,
    addComment
}