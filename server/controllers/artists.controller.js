const { getAllArtists } = require("../db/artist.db");
const { getAllQuestions } = require("../db/questions.db");
const { emitEvent } = require("../services/socket.service");

let artistSelected = null;

const getArtists = async (req, res) => {
    const artists = await getAllArtists();
    res.send(artists);
};

const selectArtist = (req, res) => {
    const { name, img } = req.body;
    artistSelected = { name, img };
    emitEvent("artist-Selected", artistSelected);
    res.send({ message: "Artista recibido correctamente" });
  };

const checkSelectArtist =  (req, res) => {
    if (artistSelected && artistSelected.name && artistSelected.img) {
        emitEvent("artist-Selected", artistSelected);
        res.send({ message: "Artista seleccionado correctamente", artistSelected });
    } 
    else {
        artistSelected = null;
        emitEvent("artist-Selected", { message: "No hay artista seleccionado" })
        return res.send({ message: "No hay artista seleccionado" });
    }
};


module.exports = {
    getArtists,
    selectArtist,
    checkSelectArtist,
};
