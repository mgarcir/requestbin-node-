var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var dict = [];

app.get("/get", (req, res, next) => {
 res.json(dict);
});

app.post("/:id", jsonParser, (req, res, next) => {
    dict.push({
        key: req.params["id"],
        value: req.body
    });

    res.json("200");
   });

app.
    use(bodyParser()).
    listen(3000, () => {
        console.log("Server running on port 3000");
    });