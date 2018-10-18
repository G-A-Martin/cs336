// Gavin Martin 
// CS 336
// Homework 1


const express = require('express')
const app = express()
const bodyParser = require("body-parser");

const HOST = "localhost";
const port = 3000

/*
const http_status = require("http-status-codes");
const bodyParser = require("body-parser")
*/
app.use(express.static('public'))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
/*
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
*/
app.get("/fetch", function(req, res) {
    res.send({"content" : "Hello " + req.query.name + ", you concieved me with your finger and mouse. Thank You!!!"});
});



app.all("*", (req, res) => {
    res.sendStatus(http_status.NO_CONTENT);
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`));