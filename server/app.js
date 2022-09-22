const express = require("express");
const cors = require("cors");
const user = require("./routes/user");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/v1", user);

module.exports = app;
