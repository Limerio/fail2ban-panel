const router = require("express").Router();
const {} = require("../database/database");

router.post("/login", (req, res) => {
  const { } = req.body;
})

router.get("/bans", (req, res) => {
  
});

router.get("/bans/:ip", (req, res) => {
  const { ip } = req.params;
});

router.post("/bans", (req, res) => {
  
});

router.delete("/bans/:ip", (req, res) => {
  const { ip } = req.params;
});

module.exports = router;
