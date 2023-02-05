const dbService = require('../../services/db.service')
const logger = require('../../services/logger.service')
const md5 = require('md5')
// const ObjectId = require('mongodb').ObjectId
// const asyncLocalStorage = require('../../services/als.service')

async function query(filterBy = {}) {
    try {
        const criteria = _buildCriteria(filterBy)
        if (filterBy.content) {
            criteria.mail = { $regex: filterBy.content, $options: 'i' }
            criteria.txt = { $regex: filterBy.content, $options: 'i' }
        }
        const collection = await dbService.getCollection('comment')
        let comments = await collection.find(criteria).toArray()
        return comments
    } catch (err) {
        logger.error('cannot find comments', err)
        throw err
    }

}

async function add(comment) {
    try {
        const commentToAdd = {
            mail:comment.mail,
            imgUrl: md5(comment.mail),
            txt: comment.txt
        }
        const collection = await dbService.getCollection('comment')
        await collection.insertOne(commentToAdd)
        return commentToAdd
    } catch (err) {
        logger.error('cannot insert comment', err)
        throw err
    }
}

function _buildCriteria(filterBy) {
    const criteria = {}
    if (filterBy.content) criteria.content = filterBy.content
    return criteria
}

module.exports = {
    query,
    add
}


