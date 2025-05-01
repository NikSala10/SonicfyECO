const { emitEvent } = require("../services/socket.service");

let gameStarted = false;

const startGame = (req, res) => {
  const { message } = req.body;
  gameStarted = true;
  emitEvent("startGame", { message });
  res.send({ message: "Cambio de pantalla exitoso" });
};

const checkGameStart = (req, res) => {
  res.send({ gameStarted });
};

const updateGameStatus = (req, res) => {
  const { secondsRemaining, gameStarted } = req.body;
  console.log(`Estado actual - Segundos: ${secondsRemaining}, Iniciado: ${gameStarted}`);
  res.json({ status: "OK" });
};

module.exports = {
  startGame,
  checkGameStart,
  updateGameStatus,
};

