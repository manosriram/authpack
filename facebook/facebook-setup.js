const passport = require("passport");
const FacebookStrategy = require("passport-facebook").Strategy;
const { FB_CLIENT_ID, FB_CLIENT_SECRET } = process.env;

passport.serializeUser(function(user, done) {
    /*
    From the user take just the id (to minimize the cookie size) and just pass the id of the user
    to the done callback
    PS: You dont have to do it like this its just usually done like this
    */
    done(null, user);
});

passport.deserializeUser(function(user, done) {
    /*
    Instead of user this function usually recives the id 
    then you use the id to select the user from the db and pass the user obj to the done callback
    PS: You can later access this data in any routes in: req.user
    */
    done(null, user);
});

passport.use(
    new FacebookStrategy(
        {
            clientID: FB_CLIENT_ID,
            clientSecret: FB_CLIENT_SECRET,
            callbackURL: "/facebook/callback"
        },
        function(accessToken, refreshToken, profile, done) {
            // Profile contains user-details.
            return done(null, profile);
        }
    )
);
