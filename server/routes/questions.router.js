const express = require("express");
const { getQuestions, handleAnswerQuestion1 } = require("../controllers/questions.controller");
const router = express.Router();

router.get("/questions", getQuestions);
router.post("/select-answer-question1", handleAnswerQuestion1);

module.exports = router;
