const express = require('express')
const {log} = require('../../middlewares/logger.middleware')
const {addComment, getComments} = require('./comment.controller')
const router = express.Router()

// middleware that is specific to this router
// router.use(requireAuth)

router.get('/', log, getComments)
router.post('/',  log, addComment)

module.exports = router