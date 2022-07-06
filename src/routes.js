const Router = require('express')

const routes = new Router()

const controller = require('./app/controllers/AlbumController')

routes.post('/album', controller.create)

module.exports = routes
