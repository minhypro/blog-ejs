import express from 'express'
import _ from 'lodash'
import { Posts } from './models/postModel.js'
import { addNewPost } from './functions/handleDB.js'

const router = express.Router()
const blogPosts = []

router.use(express.static("public"))

const aboutContent = "Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Non diam phasellus vestibulum lorem sed. Platea dictumst quisque sagittis purus sit. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Mauris in aliquam sem fringilla. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Amet massa vitae tortor condimentum lacinia quis vel eros. Enim ut tellus elementum sagittis vitae. Mauris ultrices eros in cursus turpis massa tincidunt dui.";
const contactContent = "Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero.";

router.get("/", function (req, res) {
    Posts.find({}, function (err, data) {
        if (err) {
            console.log("Error occur when get posts");
        } else {
            res.render("home", { pageContent: data })
        }
    })

})

router.get("/about", function (req, res) {
    res.render("about", { pageContent: aboutContent })
})

router.get("/contact", function (req, res) {
    res.render("contact", { pageContent: contactContent })
})

router.get("/compose", function (req, res) {
    res.render("compose", {})
})

router.post("/compose", function (req, res) {
    const postTitle = req.body.title
    const postContent = req.body.content

    addNewPost(postTitle, postContent)

    res.redirect('/')
})

router.get("/posts/:postSlug", function (req, res) {
    const requestedPost = _.kebabCase(req.params.postSlug)

    Posts.find({ slug: requestedPost }, function (err, data) {
        if (err) {
            console.log("Error occur when get post");
        } else {
            console.log(data);
            if (!data[0]) {
                res.send('Page not found');
            } else {
                res.render("post", { pageContent: data[0] })
            }
        }
    })

})

export default router