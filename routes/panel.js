const router = require("express").Router();
const isAuth = require("../utils/isAuth.js");

let bans = [
    {
        ip: "127.0.0.1",
        timeofban: "100",
        bantime: new Date()
    },
];

router.get("/", isAuth, (req, res) => {
    res.render("panel", {
        title: "Panel page",
        username: req.user.username,
        bans
    })
})

router.get("/banip/new", isAuth, (req, res) => {
    res.render("banip/new", {
        title: "Add a new ip address",
        username: req.user.username
    })
})

router.post("/banip/new", isAuth, (req, res) => {
    const { ip, timeofban } = req.body;
    if (!ip) return res.status(400).send("Unknown ip");
    if (!timeofban) return res.status(400).send("Unknown time of ban");

    if (!bans.find(ban => ban.ip === ip)) {
        bans.push({
            ip,
            timeofban,
            bantime: new Date()
        })
        return res.redirect("/panel");
    }
    return res.send("This ip is already banned")
});

router.get("/banip/edit/:ip", isAuth, (req, res) => {
    const { ip } = req.params;

    if (bans.find(ban => ban.ip === ip)) {
        res.render("banip/edit", {
            title: "Edit a ip address",
            username: req.user.username,
            ban: bans.find(ban => ban.ip === ip),
        })
    }
    return res.status(400).send("Unknown ip");
});

router.post("/banip/edit/:oldIP", isAuth, (req, res) => {
    const { oldIP } = req.params;
    let { ip, bantime, timeofban } = req.body;

    if (!bans.find(ban => ban.ip === oldIP)) return res.status(400).send("Unknown ip");

    bantime = bans.find(ban => ban.ip === oldIP).bantime

    try {
        delete bans[bans.findIndex(ban => ban.ip === oldIP)];
        bans.push({
            ip,
            timeofban,
            bantime
        });
    } catch (e) {
        console.error(e);
        return res.sendStatus(500);
    }

    res.redirect("/panel");
});

router.delete("/banip/delete/:ip", isAuth, (req, res) => { 
    const { ip } = req.params;

    if (!bans.find(ban => ban.ip === ip)) return res.status(400).send("Unknown ip");

    delete bans[bans.findIndex(ban => ban.ip === ip)];
    res.location("/panel")
})

module.exports = router;