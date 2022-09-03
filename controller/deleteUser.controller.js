const fs = require("fs");

const deleteCotroller = (req, res) => {
  fs.readFile("../server/data.json", (err, data) => {
    if (err) {
      res.send(err);
    } else {
      const parseData = JSON.parse(data);

      const { id } = req.params;
      const isId = parseData.find((item) => item.id === id);

      if (!id || isId === undefined) {
        res.send(`Id ${id} not found in our database.`);
      } else {
        const filterData = parseData.filter((item) => item.id !== id);
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
};

module.exports = deleteCotroller