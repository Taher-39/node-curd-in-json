const express = require("express");
require("dotenv").config();
const port = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(express.text());

app.get("/", (req, res, next) => {
  res.status(200).send("Connected");
});

app.use("/user", require("./routes/getUser.route"));
app.use("/user", require("./routes/saveUser.route"));
app.use("/user", require("./routes/deleteUser.route"));
app.use("/user", require("./routes/updateUser.route"));

app.listen(port, () => {
  console.log(`App runnig at port:${port}`);
});
