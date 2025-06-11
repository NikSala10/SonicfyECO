const { createUser, getAllUsers, clearUsers, updateUserInDb } = require("../db/users.db");
const { emitEvent } = require("../services/socket.service");
const supabaseCli = require("../services/supabase.service");

const registerPlayer = async (req, res) => {
  const { name, email } = req.body;
  const users = await getAllUsers();
  const activeUsers = users.filter(user => user.isActive);

  // if (activeUsers.length > 0) {
  //   // Si ya existe un usuario registrado, enviamos un mensaje de error
  //   return res.status(400).send({
  //     success: false,
  //     message: "Your registration has been rejected, someone else is already participating, please try again in a few more minutes."
  //   });
  // }

  const newUser = {
    name,
    email,
    isActive: true
  };

 const createdUser = await createUser(newUser);

  emitEvent("notificar-pantalla-instructions", {message: "Usuario ingresado", name})
  res.send({ success: true, user: createdUser });
};

const updateUser = async (req, res) => {
  const { name } = req.body;
  const { id: userId } = req.params;
  const response = await updateUserInDb({ name }, userId);
  res.send(response);
};

const deactivateUser = async (req, res) => {
  const { userId } = req.params;
  const { error } = await supabaseCli
    .from("users")
    .update({ isActive: false })
    .eq("id", userId);

  if (error) {
    console.error("Error al desactivar usuario:", error.message);
    return res.status(500).send({ success: false, error });
  }

  res.send({ success: true });
};

module.exports = {
  registerPlayer,
  updateUser,
  deactivateUser
};
