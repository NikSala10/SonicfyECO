const express = require("express");
const { getQuestions, handleAnswer } = require("../controllers/questions.controller");
const router = express.Router();

router.get("/questions", getQuestions);
router.post("/select-answer-question1", handleAnswer);

module.exports = router;
