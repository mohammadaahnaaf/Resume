//jshint everson: 7

const express = require("express");
const data = require("./config.json");
const bodyParser = require("body-parser");
var items = [];
const app = express();

app.use(express.static("public"));
app.set('view engine', 'ejs');



app.get("/", function(req, res) {
  res.render("index", data);
});

app.post("/", function(req, res) {
  var item = req.body.newItem;
  items.push(item);

  res.redirect("/");
});


console.log(data);
app.listen(3000, function() {
  console.log("Server is running on port 3000");
});
