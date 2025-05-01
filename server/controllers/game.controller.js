const { emitEvent } = require("../services/socket.service");

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

module.exports = {
  startGame,
  checkGameStart,
  updateGameStatus,
};

