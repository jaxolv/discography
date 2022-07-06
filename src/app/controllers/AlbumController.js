const discography = require('../models/emptyArray')
const CreateAlbumService = require('../services/CreateAlbumService')
const ListAlbumsService = require('../services/ListAlbumsService')
const UpdateAlbumService = require('../services/UpdateAlbumService')
const { v4 } = require('uuid')

albums = []

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
        const listAlbumsService = ListAlbumsService.listAlbumsService()
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

        const updatedAlbum = UpdateAlbumService.updateAlbumService(
            Number(id),
            band,
            title,
            year,
            tracks,
            duration,
            streaming
        )

        res.json(updatedAlbum)
    }
}

module.exports = controller