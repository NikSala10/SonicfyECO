const { createUser, getAllUsers } = require("../db/users.db");

const getUsers = async (req, res) => {
  const users = await getAllUsers();
  res.send(users);
};

const registerPlayer = async (req, res) => {
  const { name, email } = req.body;

  const newUser = {
    id: (await getAllUsers()).length + 1, // Usamos `users` directamente aquí, ya que es una variable global
    name,
    email
  };

  await createUser(newUser);

  res.send({ success: true, user: newUser });
};

module.exports = {
  registerPlayer,
};
