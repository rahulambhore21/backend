const express = require("express");
const app = express();

app.use(express.json());

app.get("/",(req, res) => {
    res.send("Hello World");
    res.end("thanks");
})

app.listen(8080, () => {
    console.log("It is running on http://localhost:8080");
})