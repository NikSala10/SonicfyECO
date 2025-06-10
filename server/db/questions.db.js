const supabaseCli = require("../services/supabase.service");

const getAllQuestions = async () => {
  const { data, error } = await supabaseCli.from("questions").select();
  if (error) {
    console.error(error);
    return error;
  }
  return data;
};

const getPreguntaGrabacionPorArtista = async (idArtist) => {
  const { data, error } = await supabaseCli
    .from("questions")
    .select()
    .eq("tipoPregunta", "Grabación")
    .eq("idArtist", idArtist)
    .limit(1)
    .single();

  if (error) {
    console.error("Error al traer pregunta de grabación para el artista:", error);
    return null;
  }

  return data;
};

module.exports = {
  getAllQuestions,
  getPreguntaGrabacionPorArtista
}