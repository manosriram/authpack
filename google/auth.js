const express = require("express");
const router = express.Router();
const passport = require("passport");
require("./google-setup.js");

router.get(
    "/login",
    passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get("/fail", async (req, res) => {
    res.send("Fail!");
});

router.get(
    "/",
    passport.authenticate("google", { failureRedirect: "/auth/google/fail" }),
    function(req, res) {
        // Successful authentication, user data in `req.user`.
        console.log(req.user);
    }
);

module.exports = router;
