const { getAllQuestions } = require("../db/questions.db");

const getQuestions = async (req, res) => {
    try {
        const questions = await getAllQuestions();
        res.send(questions); 
      } catch (error) {
        console.error("Error al obtener preguntas:", error);
        res.status(500).json({ message: "Error al obtener las preguntas" });
      }
};


module.exports = {
    getQuestions,
};