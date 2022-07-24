import _ from 'lodash'

import { Posts } from '../models/postModel.js'

export async function addNewPost(title, content) {
    const newPost = new Posts({
        title,
        content,
        slug: _.kebabCase(title)
    });
    newPost.save().then(() => console.log("post saved", title))
}

export function getPosts() {
    Posts.find({}, function (err, data) {
        if (err) {
            console.log("Error occur when get posts");
        } else {
            console.log(data);
        }
    })
}