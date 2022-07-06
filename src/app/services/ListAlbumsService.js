const AlbumModel = require('../models/AlbumModel')

const ListAlbumsService = {
    listAlbumsService: () => {
        const opiate = new AlbumModel(
            0,
            "TOOL",
            "Opiate (EP)",
            1992,
            [],
            26.52,
            true)

        const undertow = new AlbumModel(
            1,
            "TOOL",
            "Undertow",
            1993,
            [],
            69.13,
            true)

        const aenima = new AlbumModel(
            2,
            "TOOL",
            "Ænima",
            1996,
            [],
            77.18,
            true)
        
        return [opiate, undertow, aenima]
    }
}

module.exports = ListAlbumsService