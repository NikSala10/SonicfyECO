const { getAllArtists } = require("../db/artist.db");

const getArtists = async (req, res) => {
    const artists = await getAllArtists();
    res.send(artists);
};

const startQuestionGame = (req, res) => {
    const { message, artist } = req.body;
    emitEvent("startGame", { message, artist });
    res.send({ message: "Cambio de pantalla exitoso" });
  };

module.exports = {
    getArtists,
    startQuestionGame,
};
