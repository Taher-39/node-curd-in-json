const fs = require("fs");

const updateController = (req, res) => {
fs.readFile("../server/data.json", (err, data) => {
    if (err) {
      res.send(err);
    } else {
      const parseData = JSON.parse(data);
      const { id } = req.params;
      const filterData = parseData.find((item) => item.id === id);

      if (!id || filterData === undefined) {
        res.send(`Id: ${id} not found in our database.`);
      } else {
        const { name, gender, contact, address, photoUrl } = req.body;

        if (name) filterData.name = name;
        if (gender) filterData.gender = gender;
        if (contact) filterData.contact = contact;
        if (address) filterData.address = address;
        if (photoUrl) filterData.photoUrl = photoUrl;

        fs.writeFile(
          "../server/data.json",
          JSON.stringify(parseData, null, 2),
          (err) => {
            if (err) {
              res.send(err);
            }
            res.send(`User with id: ${id} has been updated`);
          }
        );
      }
    }
  });
};

const bulkUpdateController = (req, res) => {
  res.send("I don't develop it.");
};

module.exports = {
  updateController,
  bulkUpdateController,
};
