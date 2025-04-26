const express = require("express");
const { getArtists } = require("../controllers/artists.controller");
const router = express.Router();

router.get("/artists", getArtists);

module.exports = router;
