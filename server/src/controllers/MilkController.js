const { Milk } = require('../models')

module.exports = {
    //get all user
    async index(req, res) {
        try {
            const milks = await Milk.findAll()
            res.send(milks)
        } catch (err) {
            res.status(500).send({
                error: 'the milk information was incorrect'
            })
        }
    },


    // create user
    async create(req, res) {
        try {
            const milk = await milk.create(req.body)
            res.send(milk.toJSON())
        } catch (err) {
            res.status(500).send({
                error: 'Create Milk incorrect'
            })
        }
    },

    // edit user, suspend, active
    async put(req, res) {
        try {
            await Milk.update(req.body, {
                where: {
                    id: req.params.milkId
                }
            })
            res.send(req.body)
        } catch (err) {
            res.status(500).send({
                error: 'Update Milk incorrect'
            })
        }
    },

    // delete milk
    async delete(req, res) {
        try {
            const milk = await Milk.findOne({
                where: {
                    id: req.params.milkId
                }
            })
            if (!milk) {
                return res.status(403).send({
                    error: 'The Milk information was incorrect'
                })
            }
            await milk.destroy()
            res.send(milk)
        } catch (err) {
            res.status(500).send({
                error: 'The Milk information was incorrect'
            })
        }
    },

    // get user by id
    async show(req, res) {
        try {
            const milk = await Milk.findByPk(req.params.milkId)
            res.send(milk)
        } catch (err) {
            res.status(500).send({
                error: 'The Milk information was incorrect'
            })
        }
    },
}