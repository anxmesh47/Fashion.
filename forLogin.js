const express = require("express");
const app = express();
const port = 5500;

app.get("/", (req, res) => {
  res.status(5500).send(0);
});
app.listen(port, () => console.log("Server has started on port: $(port}"));
