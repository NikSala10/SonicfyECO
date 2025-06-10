const express = require("express");
const { sendAudio } = require("../controllers/audio.controller");
const router = express.Router();

router.post("/api/upload-audio", sendAudio);

module.exports = router;
