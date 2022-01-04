const routes = require('express').Router()
const UserService = require('../../services/UserService')
const userService = new UserService()

routes.get('/', async (req, res) => {
    try {
        const users = await userService.getAll()
        return res.json(users);
    } catch (error) {
        console.log(error)
        return null
    }
})

routes.get('/:id', async (req, res) => {
    const { id } = req.params
    try {
        const user = await userService.getOne(id)
        return res.json(user);
    } catch (error) {
        console.log(error)
        return null
    }
})

routes.post('/', async (req, res) => {
    try {
        const user = await userService.add(req.body)
        return res.json(user);
    } catch (error) {
        console.log(error)
        return null
    }
})

routes.put('/:id', async (req, res) => {
    const { id } = req.params
    try {
        const user = await userService.update(id, req.body)
        return res.json(user);
    } catch (error) {
        console.log(error)
        return null
    }
})
routes.delete('/:id', async (req, res) => {
    const { id } = req.params
    try {
        const user = await userService.remove(id)
        return res.json(user);
    } catch (error) {
        console.log(error)
        return null
    }
})

module.exports = routes