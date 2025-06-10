const { getAllArtists, getArtistById } = require("../db/artist.db");
const { getAllQuestions } = require("../db/questions.db");
const { updateUserInDb } = require("../db/users.db");
const { emitEvent } = require("../services/socket.service");
const { updateUser } = require("./users.controller");

let artistSelected = null;

const getArtists = async (req, res) => {
    const artists = await getAllArtists();
    res.send(artists);
};

const selectArtist = async(req, res) => {

  const { userId } = req.params;
  const { artistSelect  } = req.body;
  
  try {

    const artist = await getArtistById(artistSelect);

    if (!artist) {
        return res.status(404).json({ message: "Artista no encontrado" });
    }
  
    const updatedUser = await updateUserInDb({ artistSelect }, userId);

    artistSelected = artist;

    emitEvent("artist-Selected", artistSelected);
    res.send({ message: "Artista seleccionado correctamente", user: updatedUser });
  } catch (error) {
    console.error("Error al seleccionar artista:", error);
    res.status(500).send({ message: "Error al seleccionar artista" });
  }
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

const clearSelectedArtist = async () => {
    artistSelected = null;
  };

const artistById = async (req, res) => {
  try {
    const { id } = req.params;
    const artist = await getArtistById(id);

    if (!artist) {
      return res.status(404).json({ message: "Artista no encontrado" });
    }

    res.json(artist);
  } catch (error) {
    console.error("Error al obtener artista por ID:", error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};
module.exports = {
    getArtists,
    selectArtist,
    checkSelectArtist,
    clearSelectedArtist,
    artistById
};
