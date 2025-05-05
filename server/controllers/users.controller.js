const { createUser, getAllUsers, clearUsers } = require("../db/users.db");
const { emitEvent } = require("../services/socket.service");
const { resetGame } = require("./game.controller");

let currentUser = null;
let timeoutId = null;

const registerPlayer = async (req, res) => {
  const { name, email } = req.body;
  const users = await getAllUsers();

  if (users.length > 0) {
    // Si ya existe un usuario registrado, enviamos un mensaje de error
    return res.status(400).send({
      success: false,
      message: "Your registration has been rejected, someone else is already participating, please try again in a few more minutes."
    });
  }

  const newUser = {
    id: 1, 
    name,
    email
  };

  timeoutId = setTimeout(async () => {
    currentUser = null;
    await clearUsers(); 
  }, 10 * 1000);

  await createUser(newUser);

  emitEvent("notificar-pantalla-instructions", {message: "Usuario ingresado", name})
  res.send({ success: true, user: newUser });
};

module.exports = {
  registerPlayer,
};
