const AlbumModel = require('../models/AlbumModel')

const ListAlbumsService = {
    listAlbumsService: () => {
        const opiate = new AlbumModel(
            0,
            "TOOL",
            "Opiate (EP)",
            1992,
            ["Sweat", "Hush", "Part of Me", "Cold and Ugly (live)", "Jerk-Off (live)", "Opiate"],
            26.52,
            true)

        const undertow = new AlbumModel(
            1,
            "TOOL",
            "Undertow",
            1993,
            ["Intolerance", "Prison Sex", "Sober", "Bottom", "Crawl Away", "Swamp Song", "Undertow", "4°", "Flood", "Disgustipated"],
            69.13,
            true)

        const aenima = new AlbumModel(
            2,
            "TOOL",
            "Ænima",
            1996,
            ["Stinkfist", "Eulogy", "H.", "Useful Idiot", "Forty Six & 2", "Message to Harry Manback", "Hooker with a Penis", "Intermission", "Jimmy", "Die Eier von Satan", "Pushit", "Cesaro Summability", "Ænema", "(-)", "Third Eye"],
            77.18,
            true)
        
        return [opiate, undertow, aenima]
    }
}

module.exports = ListAlbumsService