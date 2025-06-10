const express = require("express");
const { sendAudio, microActived, microStart } = require("../controllers/audio.controller");
const router = express.Router();

router.post("/api/upload-audio", sendAudio);
router.post("/active-microphone", microActived); 
router.post("/microInit", microStart); 

module.exports = router;
