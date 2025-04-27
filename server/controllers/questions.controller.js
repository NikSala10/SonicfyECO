const { getAllQuestions } = require("../db/questions.db");

const getQuestions = async (req, res) => {
    try {
        const questions = await getAllQuestions();
        res.json(questions);  // Asegúrate de que el servidor responde con un JSON
      } catch (error) {
        console.error("Error al obtener preguntas:", error);
        res.status(500).json({ message: "Error al obtener las preguntas" });  // Si hay un error, devolver un mensaje adecuado
      }
};


module.exports = {
    getQuestions,
};