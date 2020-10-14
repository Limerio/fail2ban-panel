const { verify } = require("jsonwebtoken");
const LocalStrategy = require("passport-local");

module.exports = (passport) => {
  passport.use(
    new LocalStrategy(
      { usernameField: "username", passwordField: "password" },
        (username, password, done) => {
          const token = process.env.TOKEN;
            if (token) {
              if (verify(token, process.env.JWT_HASH).username === username && verify(token, process.env.JWT_HASH).password === password) {
                done(null, { username, password });
              } 
            }
      }
    )
  );

  passport.serializeUser(function (user, done) {
    done(null, user);
  });

  passport.deserializeUser(function (user, done) {
      done(null, user);
  });
};
