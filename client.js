require("dotenv").config();
const express = require("express");
const path =  require("path");

const app = express();
const port = process.env.CLIENT_PORT;

app.set("view engine", "ejs")
app.engine("ejs", require("ejs").renderFile)

app.use("/", require("./routes/index.js"));
app.use("/api", require("./routes/api.js"));

console.clear();
app.listen(port, () => console.log(`Connected to ${port}`))
