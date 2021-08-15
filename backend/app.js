const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;
app.use(cors());
app.use(bodyParser());

// ##############################################################

const notes = [];

app.get("/", (req, res) => {
    res.send({ message: "Hello World!" });
});

app.post("/addNote", (req, res) => {
    notes.push(req.body.note);
    res.send({});
});

app.get("/getNotes", (req, res) => {
    res.send({ notes: notes });
});

// ##############################################################

app.listen(port, () => {
    console.log(`Server is running. Port: ${port}`);
});