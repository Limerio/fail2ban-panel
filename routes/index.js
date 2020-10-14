const passport = require("passport");
const router = require("express").Router();

router.get("/", (req, res) => res.redirect("/login"))

router.get("/login", (req, res) => {
    res.render("login", {
        title: "Login page"
    })
});

router.post("/login", (req, res, next) => {
    passport.authenticate("local", {
    successRedirect: "/panel",
    failureRedirect: "/login",
  })(req, res, next);
})

router.get("/logout", (req, res) =>  {
    req.logout();
    res.redirect("/login")
});

router.use("/panel", require("./panel"))

module.exports = router;