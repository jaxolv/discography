const discography = require('../models/emptyArray')
const CreateAlbumService = require('../services/CreateAlbumService')
const ListAlbumsService = require('../services/ListAlbumsService')
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
    }
}

module.exports = controller