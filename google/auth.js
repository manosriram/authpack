const express = require("express");
const router = express.Router();
const passport = require("passport");
require("./google-setup.js");

router.get(
    "/login",
    passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get("/fail", async (req, res) => {
    res.send("Auth Fail.");
});

router.get("/success", async (req, res) => {
    res.send("Auth Success.");
});

router.get(
    "/",
    passport.authenticate("google", (err, prof) => {
        // User-Data in prof.
    })
);

module.exports = router;
