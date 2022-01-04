const routes = require('express').Router()

routes.use('/users', require('./user.route'))

module.exports = routes