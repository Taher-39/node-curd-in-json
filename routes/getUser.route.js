const express = require("express");
const fs = require("fs");

const router = express.Router();
router.get("/all", (req, res) => {
  fs.readFile("../server/data.json", (err, data) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

router.get("/random", (req, res) => {
  fs.readFile("../server/data.json", (err, data) => {
    if (err) {
      res.status(400).send(err);
    } else {
      try {
        const convertData = JSON.parse(data);
        let number = Math.ceil(Math.random() * convertData.length);
        
        const randomData = convertData.filter((data) => data.id == number);
        res.status(200).send(randomData);
      } catch (error) {
        res.status(400).send(error);
      }
    }
  });
});

module.exports = router;
