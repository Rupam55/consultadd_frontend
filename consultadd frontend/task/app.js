const express = require("express");
const bodyParser = require("body-parser");

const _ = require("lodash");

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// routes

app.get("/CC", function (req, res) {
    res.render("concentric");
  });

app.get("/Button", function (req, res) {
    res.render("Button");
});


// server starter

const PORT = process.env.PORT || 3000;

app.listen(PORT, function () {
  console.log("server started at 3000 port");
});