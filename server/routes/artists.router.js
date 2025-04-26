const express = require("express");
const { getArtists } = require("../controllers/artists.controller");
const router = express.Router();

router.get("/artists", getArtists);
router.post("/select-artist", startGame);

module.exports = router;
