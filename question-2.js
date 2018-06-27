const axios = require('axios')

require('./src/database/mongodb')

const Post = require('./src/schema/post')

const config = {
    url: 'https://jsonplaceholder.typicode.com/posts',
    method: 'GET'
}

const createPost = response => {
    if ( response.data.length > 0 ) response.data.map(value => Post.create(value))
}

axios(config)
    .then(createPost)
    .catch(err => console.log(err))