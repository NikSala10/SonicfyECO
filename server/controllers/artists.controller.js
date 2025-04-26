const { getAllArtists } = require("../db/artist.db");

const getArtists = async (req, res) => {
    const artists = await getAllArtists();
    res.send(artists);
};

module.exports = {
    getArtists,
};
