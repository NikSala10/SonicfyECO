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

module.exports = {
  startGame,
  checkGameStart,
};

