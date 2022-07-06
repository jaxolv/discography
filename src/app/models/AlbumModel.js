function AlbumModel(
    id,
    band,
    title,
    year,
    tracks,
    duration,
    streaming
) {
    this.id = id;
    this.band = band;
    this.title = title;
    this.year = year;
    this.tracks = tracks;
    this.duration = duration;
    this.streaming = streaming;
}

module.exports = AlbumModel;