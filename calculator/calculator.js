const express = require("express");

const app = express();

app.get("/", function (req, res) {
  res.send("HelloWorld");
});

app.listen(3000, function () {
  console.log("Server is running on Port 3000");
});
