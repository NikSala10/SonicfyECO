const { createUser, getAllUsers } = require("../db/users.db");
const { emitEvent } = require("../services/socket.service");

const registerPlayer = async (req, res) => {
  const { name, email } = req.body;
  const users = await getAllUsers();

  if (users.length > 0) {
    // Si ya existe un usuario registrado, enviamos un mensaje de error
    return res.status(400).send({
      success: false,
      message: "Ya existe un jugador registrado. Solo puede haber un jugador registrado en el juego."
    });
  }

  const newUser = {
    id: 1, 
    name,
    email
  };

  await createUser(newUser);

  emitEvent("notificar-pantalla-instructions", {message: "Usuario ingresado"})
  res.send({ success: true, user: newUser });
};

module.exports = {
  registerPlayer,
};
