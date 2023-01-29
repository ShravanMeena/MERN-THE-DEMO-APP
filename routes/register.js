const express = require("express");

const router = express.Router();

// import
const { registerController } = require("../controllers/register");

router.post("/register", registerController);

module.exports = router;
