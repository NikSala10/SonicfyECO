let users = [];

const getAllUsers = async () => {
  return users;
};

const createUser = async (user) => {
  users.push(user);
};

const clearUsers = async () => {
  users = [];
};

module.exports = {
  getAllUsers,
  createUser,
  clearUsers,
};
