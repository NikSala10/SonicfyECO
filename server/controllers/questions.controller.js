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
  console.log("Body recibido:", req.body);
  const { answer, artist, name } = req.body;

  try {
    if (!artist || !answer) {
      const msg = "Faltan datos: artist o answer.";
      emitEvent("notify-answer1", { correct: false, message: msg });
      return res.status(400).json({ message: msg });
    }

    const questions = await getAllQuestions();

    const questionData = questions.find(
      (q) =>
        q.idArtist &&
        q.idArtist === artist &&
        Number(q.questionNumber) === 1
    );

    console.log("Artista recibido:", artist);
    console.log("Pregunta encontrada:", questionData);

    // Validar existencia de la pregunta
    if (!questionData || !questionData.respuestaCorrecta) {
      const msg = "Pregunta inválida o sin respuesta correcta.";
      emitEvent("notify-answer1", { correct: false, message: msg });
      return res.status(400).json({ message: msg });
    }

    // Comparar respuesta del usuario con la correcta
    const correctAnswer = String(questionData.respuestaCorrecta).trim().toLowerCase();
    const userAnswer = String(answer).trim().toLowerCase();

    console.log("Respuesta correcta esperada:", correctAnswer);
    console.log("Respuesta seleccionada por el usuario:", userAnswer);

    const isCorrect = userAnswer === correctAnswer;

    // Guardar la respuesta del usuario
    await saveAnswer({
      name,
      questionNumber: 1,
      artist,
      selectedOption: answer,
      isCorrect,
      question: questionData.id
    });
    
    emitEvent("notify-answer1", { correct: isCorrect });
    return res.status(200).json({ correct: isCorrect });

  } catch (error) {
    console.error("Error al verificar la respuesta:", error);
    emitEvent("notify-answer1", { correct: false, message: "Error al verificar la respuesta." });
    return res.status(500).json({ message: "Error al verificar la respuesta." });
  }
};

const handleAnswerQuestion2 = async (req, res) => {
  const { answer, artist, name } = req.body;

  try {

    if (!artist || !answer) {
      const msg = "Faltan datos: artist o answer.";
      emitEvent("notify-answer2", { correct: false, message: msg });
      return res.status(400).json({ message: msg });
    }

    const questions = await getAllQuestions();

    const questionData = questions.find(
      (q) =>
        q.idArtist &&
        q.idArtist === artist &&
        Number(q.questionNumber) === 2
    );

    console.log("Artista recibido:", artist);
    console.log("Pregunta encontrada:", questionData);

    // Validar existencia de la pregunta
    if (!questionData || !questionData.respuestaCorrecta) {
      const msg = "Pregunta inválida o sin respuesta correcta.";
      emitEvent("notify-answer2", { correct: false, message: msg });
      return res.status(400).json({ message: msg });
    }

    const correctAnswer = String(questionData.respuestaCorrecta).trim().toLowerCase();
    const userAnswer = String(answer).trim().toLowerCase();

    console.log("Respuesta correcta esperada:", correctAnswer);
    console.log("Respuesta seleccionada por el usuario:", userAnswer);

    const isCorrect = userAnswer === correctAnswer;


    // Guardar la respuesta del usuario en la base de datos
    await saveAnswer({
      name,
      questionNumber: 2,
      artist,
      selectedOption: answer,
      isCorrect,
      question: questionData.id
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