const { emitEvent } = require("../services/socket.service");

const startGame = (req, res) => {
  const { message } = req.body;
  emitEvent("startGame", { message });
  res.send({ message: "Cambio de pantalla exitoso" });
};

module.exports = {
  startGame,
};
