const { getAllArtists } = require("../db/artist.db");
const { emitEvent } = require("../services/socket.service");

let artistSelected = null;

const getArtists = async (req, res) => {
    const artists = await getAllArtists();
    res.send(artists);
};

const selectArtist = (req, res) => {
    const { message, artist } = req.body;
    artistSelected = artist;
    res.send({ message: "Artista recibido correctamente" });
  };

const checkSelectArtist = (req, res) => {
    if (artistSelected) {
        res.json({ artistSelected });
    } else {
        res.json({ artistSelected: null });
    }
    emitEvent("artistSelected", artistSelected)
};


module.exports = {
    getArtists,
    selectArtist,
    checkSelectArtist,
};
