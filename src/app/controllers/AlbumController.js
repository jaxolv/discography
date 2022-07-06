const CreateAlbumService = require('../services/CreateAlbumService')
const ListAlbumsService = require('../services/ListAlbumsService')
const UpdateAlbumService = require('../services/UpdateAlbumService')
const DeleteAlbumService = require('../services/DeleteAlbumService')

const { v4 } = require('uuid')

const discography = []

const controller = {
    create: (req, res) => {
        const {
            band,
            title,
            year,
            tracks,
            duration,
            streaming
        } = req.body;

        const newAlbum = CreateAlbumService.createAlbum(
            v4(),
            band,
            title,
            year,
            tracks,
            duration,
            streaming
        )

        discography.push(newAlbum)

        return res.json(discography)
    },

    list: (req, res) => {
        const listAlbumsService = ListAlbumsService.listAlbums()
        return res.json(listAlbumsService)
    },

    update: (req, res) => {
        const { id } = req.params
        const {
            band,
            title,
            year,
            tracks,
            duration,
            streaming
        } = req.body

        const listUpdated = UpdateAlbumService.updateAlbum(
            Number(id),
            band,
            title,
            year,
            tracks,
            duration,
            streaming
        )

        res.json(listUpdated)
    },

    delete: (req, res) => {
        const { id } = req.params

        const listUpdated = DeleteAlbumService.deleteAlbum(id)

        res.json(listUpdated)
    }
}

module.exports = controller
