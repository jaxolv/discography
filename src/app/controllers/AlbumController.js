const discography = require('../models/emptyArray')
const CreateAlbumService = require('../services/CreateAlbumService')

const controller = {
    create: (req, res) => {
        const {
            id,
            band,
            title,
            year,
            tracks,
            duration,
            streaming
        } = req.body;

        const newAlbum = CreateAlbumService.createAlbum(
            id,
            band,
            title,
            year,
            tracks,
            duration,
            streaming
        )

        discography.push(newAlbum)

        return res.json(discography)
    }
}

module.exports = controller