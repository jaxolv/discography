const AlbumModel = require('../models/AlbumModel')
const { v4 } = require('uuid')

const CreateAlbumService = {
    createAlbum: (
        id,
        band,
        title,
        year,
        tracks,
        duration,
        streaming
    ) => {
        const album = new AlbumModel(
            v4(),
            band,
            title,
            year,
            tracks,
            duration,
            streaming
        )

        return album
    }
}

module.exports = CreateAlbumService
