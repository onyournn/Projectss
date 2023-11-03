const { Tea } = require('../models')

module.exports = {
    //get all user
    async index(req, res) {
        try {
            const teas = await Tea.findAll()
            res.send(teas)
        } catch (err) {
            res.status(500).send({
                error: 'the Tea information was incorrect'
            })
        }
    },


    // create user
    async create(req, res) {
        try {
            const tea = await Tea.create(req.body)
            res.send(tea.toJSON())
        } catch (err) {
            res.status(500).send({
                error: 'Create Tea incorrect'
            })
        }
    },

    // edit user, suspend, active
    async put(req, res) {
        try {
            await Tea.update(req.body, {
                where: {
                    id: req.params.teaId
                }
            })
            res.send(req.body)
        } catch (err) {
            res.status(500).send({
                error: 'Update Tea incorrect'
            })
        }
    },

    async delete(req, res) {
        try {
            const tea = await Tea.findOne({
                where: {
                    id: req.params.teaId
                }
            })
            if (!tea) {
                return res.status(403).send({
                    error: 'The Tea information was incorrect'
                })
            }
            await tea.destroy()
            res.send(tea)
        } catch (err) {
            res.status(500).send({
                error: 'The Tea information was incorrect'
            })
        }
    },

    // get user by id
    async show(req, res) {
        try {
            const tea = await Tea.findByPk(req.params.teaId)
            res.send(tea)
        } catch (err) {
            res.status(500).send({
                error: 'The Tea information was incorrect'
            })
        }
    },
}