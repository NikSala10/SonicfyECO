const express = require("express");
const { registerPlayer } = require("../controllers/users.controller");
const router = express.Router();

// router.get("/users", getUsers);

router.post("/register", registerPlayer);

module.exports = router;
