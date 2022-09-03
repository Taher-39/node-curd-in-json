const express = require("express");
const fs = require("fs");

const router = express.Router();

router.delete("/delete/:id", (req, res) => {
  fs.readFile("../server/data.json", (err, data) => {
    if (err) {
      res.send(err);
    } else {
      const parseData = JSON.parse(data);

      const id = Number(req.params.id);
      const isId = parseData.find((item) => Number(item.id) === id);

      if (!id || isId === undefined) {
        if (isId === undefined) {
          res.send(`Id ${id} not found in our database.`);
        } else {
          res.send("Please Insert Valid Id For Delete A User");
        }
      } else {
        const filterData = parseData.filter((item) => Number(item.id) !== id);
        fs.writeFile(
          "../server/data.json",
          JSON.stringify(filterData, null, 2),
          (err) => {
            if (err) {
              res.send(err);
            }
            res.send(`Data deleted where id: ${id}`);
          }
        );
      }
    }
  });
});

module.exports = router;
