const express = require("express");
const { getArtists, startQuestionGame } = require("../controllers/artists.controller");
const router = express.Router();

router.get("/artists", getArtists);
router.post("/select-artist", startQuestionGame);

module.exports = router;
