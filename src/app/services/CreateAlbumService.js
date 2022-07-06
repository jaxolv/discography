const AlbumModel = require('../models/AlbumModel')

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
            id,
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
