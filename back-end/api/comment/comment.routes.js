const express = require('express')
const {addComment, getComments} = require('./comment.controller')
const router = express.Router()

// middleware that is specific to this router
// router.use(requireAuth)

router.get('/', getComments)
router.post('/', addComment)

module.exports = router