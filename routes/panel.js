const router = require("express").Router();
const isAuth = require("../utils/isAuth.js");

router.get("/",  isAuth , (req, res) => {
    res.render("panel", {
        title: "Panel page",
        username: req.user.username
    })
})

router.get("/banip/new", isAuth, (req, res) => {
    res.render("banip/new", {
        title: "Add a new ip address",
        username: req.user.username
    })
})

router.get("/banip/edit/:ip", isAuth, (req, res) => {
    const { ip } = req.params;
    res.render("banip/edit", {
        title: "Edit a ip address",
        username: req.user.username,
        ip,
    })
})

module.exports = router;