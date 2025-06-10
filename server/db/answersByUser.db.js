const supabaseCli = require("../services/supabase.service");

const saveAnswer = async (answerData) => {
  const { data, error } = await supabaseCli
    .from("respuestaUsuario")
    .insert([{
      isCorrect: answerData.isCorrect,
      question: answerData.question, 
    }]);

  if (error) {
    console.error("Error al guardar la respuesta:", error);
    throw error;
  }

  return data;
};

// Obtener todas las respuestas
const getAllAnswers = async () => {
  const { data, error } = await supabaseCli
    .from('respuestaUsuario')
    .select('*');

  if (error) {
    console.error('Error al obtener las respuestas:', error);
    throw error;
  }

  return data;
};

// Borrar todas las respuestas
const clearAnswers = async () => {
  const { error } = await supabaseCli
    .from("respuestaUsuario")
    .delete(); 

  if (error) {
    console.error("Error al eliminar las respuestas:", error);
    return false;
  }

  return true;
};

module.exports = {
  saveAnswer,
  getAllAnswers,
  clearAnswers,
};