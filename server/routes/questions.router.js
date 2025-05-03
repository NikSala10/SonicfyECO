const express = require("express");
const { getQuestions, handleAnswerQuestion1, handleAnswerQuestion2 } = require("../controllers/questions.controller");
const router = express.Router();

router.get("/questions", getQuestions);
router.post("/select-answer-question1", handleAnswerQuestion1);
router.post("/select-answer-question2", handleAnswerQuestion2);

module.exports = router;
