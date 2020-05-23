const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 5000;
const passport = require("passport");
const FacebookStrategy = require("passport-facebook").Strategy;
const { FB_CLIENT_ID, FB_CLIENT_SECRET } = process.env;

app.use(passport.initialize());
passport.use(
    new FacebookStrategy(
        {
            clientID: FB_CLIENT_ID,
            clientSecret: FB_CLIENT_SECRET,
            callbackURL: "/facebook/callback"
        },
        function(accessToken, refreshToken, profile, done) {
            // Profile contains user-details.
        }
    )
);

app.use(express.json());
app.use("/google", require("./google/auth.js"));
app.use("/facebook", require("./facebook/auth.js"));

app.listen(PORT, () => console.log(`Server at ${PORT}`));

module.exports = app;
