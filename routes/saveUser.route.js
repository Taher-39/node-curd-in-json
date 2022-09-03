const express = require("express");
const fs = require("fs");

const router = express.Router();

router.post("/save", (req, res) => {
  fs.readFile("../server/data.json", (err, data) => {
    if (err) {
      res.send(err);
    } else {
      const newData = JSON.parse(data);

      const { id, name, gender, contact, address, photoUrl } = req.body;

      if (id && name && gender && contact && address && photoUrl) {
        newData.push(req.body);

        fs.writeFile(
          "../server/data.json",
          JSON.stringify(newData, null, 2),
          (err) => {
            if (err) {
              res.send(err);
            } else {
              res.send(`New user saved our database with id: ${id}`);
            }
          }
        );
      } else {
        res.send(
          "Please Insert Valid Data like: id, name, gender, contact, address, photoUrl"
        );
      }
    }
  });
});

module.exports = router;
