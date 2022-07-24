import mongoose from "mongoose"

const postsSchema = new mongoose.Schema({
    title: {
        type: String,
        default: "Untitled"
    },
    content: {
        type: String,
        default: ""
    },
    slug: {
        type: String,
        unique: true,
    },
    createdAt: {
        type: Date,
        immutable: true,
        default: () => Date.now()
    },
    updatedAt: {
        type: Date,
        default: () => Date.now()
    },

})

export const Posts = mongoose.model("posts", postsSchema)
