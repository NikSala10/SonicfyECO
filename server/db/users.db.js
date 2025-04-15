let users = [
  {
    id: 1,
    name: "John Doe",
  },
];

const getAllUsers = async () => {
  return users;
};

const createUser = async (user) => {
  users.push(user);
};

module.exports = {
  getAllUsers,
  createUser,
};
