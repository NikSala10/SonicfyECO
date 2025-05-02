const { getAllQuestions } = require("../db/questions.db");
const { emitEvent } = require("../services/socket.service");

const getQuestions = async (req, res) => {
  try {
      const questions = await getAllQuestions();
      res.send(questions); 
    } catch (error) {
      console.error("Error al obtener preguntas:", error);
      res.status(500).json({ message: "Error al obtener las preguntas" });
    }
};

const handleAnswer = (req, res) => {
  const { answer, artist } = req.body;

  getAllQuestions().then((questions) => {
    console.log("Usuario respondió:", answer);
console.log("Respuesta correcta:", correctAnswer);
console.log("Coinciden:", answer.trim().toLowerCase() === correctAnswer);
    const artistData = questions.find((q) => q.artist.toLowerCase() === artist.toLowerCase());

    if (!artistData || !artistData.questions || artistData.questions.length === 0) {
      emitEvent("notify-answer", { correct: false, message: "No hay preguntas disponibles para este artista." });
      return res.status(400).json({ message: "No hay preguntas disponibles para este artista." });
    }
    
    const question = artistData.questions[0];

if (!question || !question.correctAnswer) {
  emitEvent("notify-answer", { correct: false, message: "Pregunta inválida o sin respuesta correcta." });
  return res.status(400).json({ message: "Pregunta inválida o sin respuesta correcta." });
}

const correctAnswer = question.correctAnswer.trim().toLowerCase();
const isCorrect = answer.trim().toLowerCase() === correctAnswer;

    
    emitEvent("notify-answer", { correct: isCorrect });
    res.status(200).json({ correct: isCorrect });

  }).catch((error) => {
    console.error("Error al obtener preguntas para la verificación:", error);
    emitEvent("notify-answer", { correct: false, message: "Error al verificar la respuesta." });
  });
};

module.exports = {
  getQuestions,
  handleAnswer,
};