const router = require("express").Router();
const isAuth = require("../utils/isAuth.js");

router.get("/login", (req, res) => {
    res.render("login", {
        title: "Login page"
    })
});

router.get("/panel", isAuth, (req, res) => {
    res.render("panel")
})

module.exports = router;