const supabaseCli = require("../services/supabase.service");

const getAllArtists = async () => {
  const { data, error } = await supabaseCli.from("artists").select();
  if (error) {
    console.error(error);
    return error;
  }
  return data;
};

const getArtistById = async (id) => {
  const { data, error } = await supabaseCli
    .from('artists')
    .select('*')
    .eq('id', id)
    .single();  

  if (error) {
    console.error('Error fetching artist by id:', error);
    return null;
  }

  return data;
};
module.exports = {
  getAllArtists,
  getArtistById
};