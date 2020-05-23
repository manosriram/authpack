const express = require("express");
const router = express.Router();
const passport = require("passport");
const FacebookStrategy = require("passport-facebook").Strategy;
require("./facebook-setup.js");

router.get("/facebook-login", passport.authenticate("facebook"));

router.get("/success", (req, res) => {
    res.send("Auth Success!");
});

router.get("/fail", async (req, res) => {
    res.send("Auth Fail.");
});

router.get(
    "/callback",
    passport.authenticate("facebook", (err, prof) => {
        // User-Data in prof.
    })
);

module.exports = router;
