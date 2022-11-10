const mongoose = require('mongoose')
const blogSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true
    },
    title: {
        type: String,
        unique: true,
        required: true,
        trim: true,
    },
    category: {
        type: String,
        required: true,
        trim: true
    },
    content: {
        type: String,
        required: true,
        trim: true
    },
})
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
})
const subsSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        lowercase: true,
    }
})
const Blog = mongoose.model('blog', blogSchema)
const User = mongoose.model('user', userSchema)
const Subscribe = mongoose.model('subscribe', subsSchema)
module.exports = { User, Blog, Subscribe };