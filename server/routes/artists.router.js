const express = require("express");
const { getArtists, selectArtist, checkSelectArtist } = require("../controllers/artists.controller");
const router = express.Router();

router.get("/artists", getArtists);
router.post("/select-artist", selectArtist);
router.get("/check-select-artist", checkSelectArtist );

module.exports = router;
