module.exports = {
    create: async (req, res) => {
        const PostModel = require('../schema/post')
        try {
            const posts = await PostModel.create(req.body)
            res.status(201).json(posts)
        } catch (err) {
            res.status(500).json(err)
        }
    }, 
    listAll: async (req, res) => {
        const PostModel = require('../schema/post')
        try {
            const posts = await PostModel.find({})
            res.status(200).json(posts)
        } catch (err) {
            res.status(500).json(err)
        }
    },
    listOne: async (req, res) => {
        const PostModel = require('../schema/post')
        try {
            const posts = await PostModel.findOne(req.params)
            res.status(200).json(posts)
        } catch (err) {
            res.status(500).json(err)
        }
    },
    update: async (req, res) => {
        const PostModel = require('../schema/post')
        try {
            const posts = await PostModel.update(req.params, req.body)
            res.status(200).json(posts)
        } catch (err) {
            res.status(500).json(err)
        }
    },
    delete: async (req, res) => {
        const PostModel = require('../schema/post')
        try {
            const posts = await PostModel.remove(req.params)
            res.status(200).json(posts)
        } catch (err) {
            res.status(500).json(err)
        }
    }
}