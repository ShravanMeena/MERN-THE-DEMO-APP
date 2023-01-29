const express = require("express");

const router = express.Router();

// import
const { resetPasswordController } = require("../controllers/resetPassword");

router.post("/reset-password", resetPasswordController);

module.exports = router;
