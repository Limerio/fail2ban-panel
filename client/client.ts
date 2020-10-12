import express from "express";

const app = express();
const port = process.env.CLIENT_PORT;

app.listen(port, () => console.log(`Connected to ${port}`))