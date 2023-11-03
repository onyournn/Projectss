const { Beverage } = require('../models')

module.exports = {
    //get all user
    async index(req, res) {
        try {
            const beverages = await Beverage.findAll()
            res.send(beverages)
        } catch (err) {
            res.status(500).send({
                error: 'the Beverage information was incorrect'
            })
        }
    },


    // create user
    async create(req, res) {
        try {
            const beverage = await Beverage.create(req.body)
            res.send(beverage.toJSON())
        } catch (err) {
            res.status(500).send({
                error: 'Create Beverage incorrect'
            })
        }
    },

    // edit user, suspend, active
    async put(req, res) {
        try {
            await Beverage.update(req.body, {
                where: {
                    id: req.params.beverageId
                }
            })
            res.send(req.body)
        } catch (err) {
            res.status(500).send({
                error: 'Update Beverage incorrect'
            })
        }
    },

    async delete(req, res) {
        try {
            const beverage = await Beverage.findOne({
                where: {
                    id: req.params.beverageId
                }
            })
            if (!beverage) {
                return res.status(403).send({
                    error: 'The Beverage information was incorrect'
                })
            }
            await beverage.destroy()
            res.send(beverage)
        } catch (err) {
            res.status(500).send({
                error: 'The Beverage information was incorrect'
            })
        }
    },

    // get user by id
    async show(req, res) {
        try {
            const beverage = await Beverage.findByPk(req.params.beverageId)
            res.send(beverage)
        } catch (err) {
            res.status(500).send({
                error: 'The Beverage information was incorrect'
            })
        }
    },
}