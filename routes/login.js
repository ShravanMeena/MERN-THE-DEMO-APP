const express = require("express");

const router = express.Router();

// import
const { loginController } = require("../controllers/login");

router.post("/login", loginController);

module.exports = router;
