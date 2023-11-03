const { Fruitjuice } = require('../models')

module.exports = {
    //get all user
    async index(req, res) {
        try {
            const fruitjuices = await Fruitjuice.findAll()
            res.send(fruitjuices)
        } catch (err) {
            res.status(500).send({
                error: 'the Fruitjuice information was incorrect'
            })
        }
    },


    // create user
    async create(req, res) {
        try {
            const fruitjuice = await Fruitjuice.create(req.body)
            res.send(fruitjuice.toJSON())
        } catch (err) {
            res.status(500).send({
                error: 'Create Fruitjuice incorrect'
            })
        }
    },

    // edit user, suspend, active
    async put(req, res) {
        try {
            await Fruitjuice.update(req.body, {
                where: {
                    id: req.params.fruitjuiceId
                }
            })
            res.send(req.body)
        } catch (err) {
            res.status(500).send({
                error: 'Update Fruitjuice incorrect'
            })
        }
    },

    async delete(req, res) {
        try {
            const fruitjuice = await Fruitjuice.findOne({
                where: {
                    id: req.params.fruitjuiceId
                }
            })
            if (!fruitjuice) {
                return res.status(403).send({
                    error: 'The Fruitjuice information was incorrect'
                })
            }
            await fruitjuice.destroy()
            res.send(fruitjuice)
        } catch (err) {
            res.status(500).send({
                error: 'The Fruitjuice information was incorrect'
            })
        }
    },

    // get user by id
    async show(req, res) {
        try {
            const fruitjuice = await Fruitjuice.findByPk(req.params.fruitjuiceId)
            res.send(fruitjuice)
        } catch (err) {
            res.status(500).send({
                error: 'The Fruitjuice information was incorrect'
            })
        }
    },
}