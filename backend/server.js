const express = require("express");
const cors = require("cors");
require("dotenv").config();
const mysql = require("mysql");

const app = express();
app.use(express.json());
app.use(cors());

const urlDB = 'mysql://${process.env.root}:${process.env.aACE21c-F3A36HEH3aC1bDC3DaBEDb-B@monorail.proxy.rlwy.net}:${process.env.10191}/${process.env.railway}'
const db = mysql.createConnection(urlDB)

app.get("/", (req, res) => {
    const sql = "SELECT * FROM student";
    db.query(sql, (err, data) =>{
        if(err) return res.json("Error0", err);
        return res.json(data);
    })
})

app.post("/create", (req, res) => {
    const { name, email } = req.body
    const sql ="INSERT INTO student (Name, Email) VALUES (?,?)"
    const values =[
        req.body.name,
        req.body.email
    ]
    db.query(sql, values, (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: "Error1", message: "Internal Server Error" });
        }

        return res.json(data);
    });
})


app.put("/update/:id", (req, res) => {
    const { name, email } = req.body
    const sql ="update student set Name = ?, Email = ?  where ID=?"
    const values =[
        req.body.name,
        req.body.email
    ]
    const id = req.params.id
    db.query(sql, [...values, id], (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: "Error2", message: "Internal Server Error" });
        }

        return res.json(data);
    });
})

app.delete("/student/:id", (req, res) => {
    const { name, email } = req.body
    const sql ="DELETE FROM student where ID=?"
    const id = req.params.id
    db.query(sql, [id], (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: "Error2", message: "Internal Server Error" });
        }

        return res.json(data);
    });
})

app.listen(8081, () => {
    console.log("Listening");
})