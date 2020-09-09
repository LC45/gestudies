
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");


const app = express();

app.set("view engine" , "ejs");

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("public"));




app.listen(6000, function() {
  console.log("Server started on Port 6000");
});
