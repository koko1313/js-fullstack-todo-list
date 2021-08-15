const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require("mysql");

const app = express();
const port = 3000;
app.use(cors());
app.use(bodyParser());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "todolist"
});

// ##############################################################

app.post("/addNote", (req, res) => {
    db.query(`INSERT INTO notes (note) VALUES ("${req.body.note}")`);
    res.send({});
});

app.get("/getNotes", (req, res) => {
    db.query("SELECT * FROM notes ORDER BY id ASC", (error, results) => {
        res.send(results);
    });
});

app.post("/deleteNote", (req, res) => {
    db.query(`DELETE FROM notes WHERE id = ${req.body.id}`);
    res.send({});
});

// ##############################################################

app.listen(port, () => {
    console.log(`Server is running. Port: ${port}`);
});