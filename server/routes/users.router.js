const express = require("express");
const { registerPlayer, updateUser, deactivateUser } = require("../controllers/users.controller");
const router = express.Router();

router.post("/register", registerPlayer);
router.put("/users/:userId", updateUser);
router.post("/deactivate-user/:userId", deactivateUser);

module.exports = router;
