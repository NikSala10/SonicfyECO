const express = require("express");
const { startGame, checkGameStart, updateGameStatus, resetGame } = require("../controllers/game.controller");
const router = express.Router();

router.post("/start-game", startGame);
router.get("/check-game-start",checkGameStart)
router.post("/update-game-status",updateGameStatus)
router.post("/reset-game", resetGame);

module.exports = router;
