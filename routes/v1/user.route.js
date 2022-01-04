const routes = require('express').Router()
const UserService = require('../../services/UserService')
const userService = new UserService()

routes.get('/', (req, res) => {
    try {
        return res.json(userService.getAll());
    } catch (error) {
        console.log(error)
        return null
    }
})

routes.get('/:id', (req, res) => {
    const { id } = req.params
    try {
        return res.json(userService.getOne(id));
    } catch (error) {
        console.log(error)
        return null
    }
})

routes.post('/', (req, res) => {
    const { data } = req.body
    try {
        return res.json(userService.add(data));
    } catch (error) {
        console.log(error)
        return null
    }
})

routes.put('/:id', (req, res) => {
    const { id } = req.params
    const { data } = req.body
    try {
        return res.json(userService.update(id, data));
    } catch (error) {
        console.log(error)
        return null
    }
})

module.exports = routes