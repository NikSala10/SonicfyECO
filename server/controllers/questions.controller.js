const { saveAnswer } = require("../db/answersByUser.db");
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

const handleAnswerQuestion1 = async (req, res) => {
  const { answer, artist, name } = req.body;

  try {
    const questions = await getAllQuestions();
    const artistData = questions.find((q) => q.artist.toLowerCase() === artist.toLowerCase());

    if (!artistData || !artistData.questions || artistData.questions.length === 0) {
      emitEvent("notify-answer1", { correct: false, message: "No hay preguntas disponibles para este artista." });
      return res.status(400).json({ message: "No hay preguntas disponibles para este artista." });
    }

    const question = artistData.questions[0];

    if (!question || !question.correctAnswer) {
      emitEvent("notify-answer1", { correct: false, message: "Pregunta inválida o sin respuesta correcta." });
      return res.status(400).json({ message: "Pregunta inválida o sin respuesta correcta." });
    }

    const correctAnswer = question.correctAnswer.trim().toLowerCase();
    const isCorrect = answer.trim().toLowerCase() === correctAnswer;

    // Guardar la respuesta del usuario en la base de datos
    await saveAnswer({
      name,
      questionNumber: 1,
      artist,
      selectedOption: answer,
      isCorrect,
    });

    emitEvent("notify-answer1", { correct: isCorrect });
    res.status(200).json({ correct: isCorrect });

  } catch (error) {
    console.error("Error al verificar la respuesta:", error);
    emitEvent("notify-answer1", { correct: false, message: "Error al verificar la respuesta." });
    res.status(500).json({ message: "Error al verificar la respuesta." });
  }
};

const handleAnswerQuestion2 = async (req, res) => {
  const { answer, artist, name } = req.body;

  try {
    const questions = await getAllQuestions();
    const artistData = questions.find((q) => q.artist.toLowerCase() === artist.toLowerCase());
  
    if (!artistData || !artistData.questions || artistData.questions.length === 0) {
      emitEvent("notify-answer2", { correct: false, message: "No hay preguntas disponibles para este artista." });
      return res.status(400).json({ message: "No hay preguntas disponibles para este artista." });
    }
    
    const question = artistData.questions[1];
   
    if (!question || !question.correctAnswer) {
      emitEvent("notify-answer2", { correct: false, message: "Pregunta inválida o sin respuesta correcta." });
      return res.status(400).json({ message: "Pregunta inválida o sin respuesta correcta." });
    }
    
    const correctAnswer = question.correctAnswer.trim().toLowerCase();
 
    const isCorrect = answer.trim().toLowerCase() === correctAnswer;

    // Guardar la respuesta del usuario en la base de datos
    await saveAnswer({
      name,
      questionNumber: 2,
      artist,
      selectedOption: answer,
      isCorrect,
    });

    emitEvent("notify-answer2", { correct: isCorrect });
    res.status(200).json({ correct: isCorrect });

  } catch (error) {
    console.error("Error al verificar la respuesta:", error);
    emitEvent("notify-answer2", { correct: false, message: "Error al verificar la respuesta." });
    res.status(500).json({ message: "Error al verificar la respuesta." });
  }
};

module.exports = {
  getQuestions,
  handleAnswerQuestion1,
  handleAnswerQuestion2,
};