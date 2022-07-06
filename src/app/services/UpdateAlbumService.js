const ListAlbumsService = require('../services/ListAlbumsService')

const UpdateAlbumService = {
    updateAlbum: (
        id,
        band,
        title,
        year,
        tracks,
        duration,
        streaming
    ) => {
        const albums = ListAlbumsService.listAlbums()

        const albumIndex = albums.findIndex(album => album.id === Number(id))

        if (albumIndex === -1) {
            return {erro: "album not found"}
        }

        albums[albumIndex] = {
            id,
            band,
            title,
            year,
            tracks,
            duration,
            streaming
        }

        return albums
    }
}

module.exports = UpdateAlbumService