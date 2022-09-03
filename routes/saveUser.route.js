const express = require("express");
const saveUser = require("../controller/saveUser.controller");

const router = express.Router();

router.post("/save", saveUser);

module.exports = router;
