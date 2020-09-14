const express = require("express")
const data = require("./config.json")

const app = express();
app.use(express.static("public"));
app.set('view engine', 'ejs');

app.get("/", function(req, res) {

  res.render("index", data)
});



console.log(data)
app.listen(3000, function() {
  console.log("Server is running on port 3000")
});
