const express = require("express");
const { startGame } = require("../controllers/game.controller");
const router = express.Router();

router.post("/start-game", startGame);
router.get("/check-game-start",)
router.post("/update-game-status",)

module.exports = router;
