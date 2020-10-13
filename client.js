require("dotenv").config();
const express = require("express");
const session = require("express-session");
const passport = require("passport")
const { sign } = require("./utils/jwt");
require("./utils/passport")(passport)

const app = express();
const port = process.env.CLIENT_PORT;

app.set("view engine", "ejs")
app.engine("ejs", require("ejs").renderFile)

app.use(
  session({
    secret: process.env.PASSWORD_EXPRESS,
    resave: false,
    saveUninitialized: false,
  })
);

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(passport.initialize());
app.use(passport.session());

app.use("/", require("./routes/index.js"));
app.use("/api", require("./routes/api.js"));

console.clear();
app.listen(port, () => console.log(`Connected to ${port}`))
