const supabaseCli = require("../services/supabase.service");

const getAllUsers = async () => {
  const { data, error } = await supabaseCli.from("users").select();
  if (error) {
    console.error(error);
    return error;
  }
  return data;
};

const createUser = async (user) => {
  console.log("Intentando crear usuario:", user);

  const { data, error } = await supabaseCli
    .from("users")
    .insert([user])
    .select("*");

  if (error) {
    console.error("Error al insertar usuario:", error.message);
    console.error("Detalles:", error.details);
    return error;
  }

  console.log("Usuario creado:", data);
  return data[0];
};

const clearUsers = async () => {
  const { error } = await supabaseCli
    .from("users")
    .update({ isActive: false })
    .neq("id", null); 

  if (error) {
    console.error("Error al desactivar usuarios:", error);
  }
};

const updateUserInDb = async (newData, userId) => {
  const { data, error } = await supabaseCli
    .from("users")
    .update(newData)
    .eq("id", userId)
    .select("*");

  if (error) {
    console.error("Error updating user:", error);
    return null;
  }

  if (!data || data.length === 0) {
    console.error("No se encontró usuario con id:", userId);
    return null;
  }

  return data[0];
};
module.exports = {
  getAllUsers,
  createUser,
  clearUsers,
  updateUserInDb
};
