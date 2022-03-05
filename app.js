const express = require("express");
const path = require('path');
const app = express();

app.use(express.static(__dirname + '/assets'));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.listen(process.env.PORT || 5000, () => {
  console.log("Server is running on port 5000");
});

