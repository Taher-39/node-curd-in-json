const express = require("express");
const {
  updateController,
  bulkUpdateController,
} = require("../controller/updateUser.controller");

const router = express.Router();

router.patch("/update/:id", updateController);

router.patch("/bulk-update", bulkUpdateController);

module.exports = router;
