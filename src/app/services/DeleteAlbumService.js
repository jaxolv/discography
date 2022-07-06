const ListAlbumService = require('./ListAlbumsService')

const DeleteAlbumService = {
    deleteAlbum: (id) => {
        const albums = ListAlbumService.listAlbums()

        const albumIndex = albums.findIndex(album => album.id === Number(id))

        if (albumIndex === -1) {
            return {erro: "album not found"}
        }

        albums.splice(albumIndex, 1)

        return albums
    }
}

module.exports = DeleteAlbumService