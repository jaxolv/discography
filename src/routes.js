const Router = require('express')

const routes = new Router()

const controller = require('./app/controllers/AlbumController')

routes.post('/album', controller.create)
routes.get('/album', controller.list)

module.exports = routes
