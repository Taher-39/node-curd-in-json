const express = require("express");
const deleteCotroller = require("../controller/deleteUser.controller");

const router = express.Router();

router.delete("/delete/:id", deleteCotroller);

module.exports = router;
