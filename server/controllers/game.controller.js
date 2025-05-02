const { clearAnswers } = require("../db/answersByUser.db");
const { clearUsers } = require("../db/users.db");
const { emitEvent } = require("../services/socket.service");
const { clearSelectedArtist } = require("./artists.controller");

let gameStarted = false;

const startGame = (req, res) => {
  const { message } = req.body;
  gameStarted = true;
  emitEvent("game-status", { gameStarted: true })  
  res.send({ message: "Cambio de pantalla exitoso" });
};

const checkGameStart = (req, res) => {
  emitEvent("game-status", { gameStarted });
  res.send({ gameStarted });
};

const updateGameStatus = (req, res) => {
  const { secondsRemaining, gameStarted: newGameStarted } = req.body;
  if (newGameStarted !== undefined) {
    gameStarted = newGameStarted;
  }
  emitEvent("game-status", { gameStarted, secondsRemaining });
  res.json({ status: "OK" });
};

const resetGame = async (req, res) => {
  try {
    console.log("RESET solicitado");
    await clearUsers();
    await clearSelectedArtist();
    await clearAnswers();

    emitEvent("game-reset", { success: true });

    res.status(200).json({ message: "Juego reiniciado correctamente." });
  } catch (error) {
    console.error("Error al reiniciar el juego:", error);
    res.status(500).json({ message: "Error al reiniciar el juego." });
  }
};


module.exports = {
  startGame,
  checkGameStart,
  updateGameStatus,
  resetGame,
};

