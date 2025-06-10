const express = require("express");
const { getArtists, selectArtist, checkSelectArtist, artistById } = require("../controllers/artists.controller");
const router = express.Router();

router.get("/artists", getArtists);
router.post("/select-artist", selectArtist);
router.get("/artists", artistById);
router.put("/select-artist/:userId", selectArtist);
router.get("/check-select-artist", checkSelectArtist );

module.exports = router;
