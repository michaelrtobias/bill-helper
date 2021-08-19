const express = require("express");
const app = express();
const dotenv = require("dotenv").config();

app.get("/", async (req, res) => {
  res.send("Gotta Catch'em All");
});

app.listen(process.env.APIPORT, () => {
  console.log(`API server listening on port: ${process.env.APIPORT}`);
});
