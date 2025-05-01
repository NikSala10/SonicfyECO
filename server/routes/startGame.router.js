const express = require("express");
const { startGame, checkGameStart, updateGameStatus } = require("../controllers/game.controller");
const router = express.Router();

router.post("/start-game", startGame);
router.get("/check-game-start",checkGameStart)
router.post("/update-game-status",updateGameStatus)

module.exports = router;
