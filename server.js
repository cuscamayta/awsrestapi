var express = require("express")
var app = express()
// var db = require("./database.js")
// var md5 = require("md5")

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var HTTP_PORT = 3000

// Start server
app.listen(HTTP_PORT, () => {
    console.log("Server running on port %PORT%".replace("%PORT%",HTTP_PORT))
});

app.get("/api/users", (req, res, next) => {
    res.json({"message":"Ok from get"});
});

app.get("/api/", (req, res, next) => {
    res.json({"message":"Ok from home"});
});

app.get("/", (req, res, next) => {
    res.json({"message":"Ok from home home"});
});

app.get("/api/user/:id", (req, res, next) => {
    res.json({message:'this is a get users'});
});