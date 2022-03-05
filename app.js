const express = require("express");

const app = express();

// const PORT = process.env.PORT || 5000;

// app.get("", (req, res) => {
//     res.send("Hello World");
// });

// app.listen(PORT, () => {
//     console.log("App is running")
// });

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.listen(process.env.PORT || 5000, () => {
  console.log("Server is running on port 5000");
});

