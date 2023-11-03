const { Softdrink } = require('../models')

module.exports = {
    //get all user
    async index(req, res) {
        try {
            const softdrinks = await Softdrink.findAll()
            res.send(softdrinks)
        } catch (err) {
            res.status(500).send({
                error: 'the softdrink information was incorrect'
            })
        }
    },


    // create user
    async create(req, res) {
        try {
            const softdrink = await softdrink.create(req.body)
            res.send(softdrink.toJSON())
        } catch (err) {
            res.status(500).send({
                error: 'Create Softdrink incorrect'
            })
        }
    },

    // edit user, suspend, active
    async put(req, res) {
        try {
            await Softdrink.update(req.body, {
                where: {
                    id: req.params.softdrinkId
                }
            })
            res.send(req.body)
        } catch (err) {
            res.status(500).send({
                error: 'Update Softdrink incorrect'
            })
        }
    },

    async delete(req, res) {
        try {
            const softdrink = await Softdrink.findOne({
                where: {
                    id: req.params.softdrinkId
                }
            })
            if (!softdrink) {
                return res.status(403).send({
                    error: 'The Softdrink information was incorrect'
                })
            }
            await softdrink.destroy()
            res.send(softdrink)
        } catch (err) {
            res.status(500).send({
                error: 'The Softdrink information was incorrect'
            })
        }
    },

    // get user by id
    async show(req, res) {
        try {
            const softdrink = await Softdrink.findByPk(req.params.softdrinkId)
            res.send(softdrink)
        } catch (err) {
            res.status(500).send({
                error: 'The Softdrink information was incorrect'
            })
        }
    },
}