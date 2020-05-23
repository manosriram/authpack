const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 5000;
const passport = require("passport");

app.use(passport.initialize());
app.use(express.json());
app.use("/google", require("./google/auth.js"));
app.use("/facebook", require("./facebook/auth.js"));

app.listen(PORT, () => console.log(`Server at ${PORT}`));

module.exports = app;
