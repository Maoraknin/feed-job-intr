import { httpService } from './http.service.js'

const BASE_URL = 'comment/'

export const commentService = {
    query,
    save,
    getDefaultFilter
}

function query(filterBy = getDefaultFilter()) {
    const queryParams = `?content=${filterBy.content}`
    return httpService.get(BASE_URL + queryParams)
}

function save(comment) {
    if (comment._id) {
        return httpService.put(BASE_URL, comment)
    } else {
        return httpService.post(BASE_URL, comment)
    }
}

function getDefaultFilter() {
    return { content: '' }
}



