const { getAllUsers } = require("../db/users.db");

const getUsers = async (req, res) => {
  const users = await getAllUsers();
  res.send(users);
};

const createUser = async (req, res) => {
  const { id, name } = req.body;
  const response = await createUser({ id, name });
  res.send(response);
};

module.exports = {
  getUsers,
  createUser,
};
