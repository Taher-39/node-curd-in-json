const express = require("express");
const {
  getAllUser,
  getRandomUser,
} = require("../controller/getUser.controller");

const router = express.Router();

router.get("/all", getAllUser);

router.get("/random", getRandomUser);

module.exports = router;
