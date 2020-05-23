const express = require("express");
const router = express.Router();
const passport = require("passport");
const FacebookStrategy = require("passport-facebook").Strategy;

router.get("/facebook-login", passport.authenticate("facebook"));

router.get("/done", (req, res) => {
    res.send("DONE!");
});

router.get(
    "/callback",
    passport.authenticate("facebook", {
        successRedirect: "/facebook/done",
        failureRedirect: "/facebook/fail"
    })
);

router.get("/fail", async (req, res) => {
    res.send("Fail!");
});

module.exports = router;
