//- require related modules
const express = require("express");
const exphbs = require("express-handlebars");
const URL = require("./models/URL");
const checkFormInput = require("./checkFormInput");
//- connect to db
require("./config/mongoose");

const app = express();
const port = 3000;

//- set view engine
app.engine("hbs", exphbs.engine({ defaultLayout: "main", extname: "hbs" }));
app.set("view engine", "hbs");

//- load static file
app.use(express.static("public"));
//- bodyparser
app.use(express.urlencoded({ extended: true }));

//- set route
app.get("/", (req, res) => {
  return res.render("index");
});

app.post("/", (req, res) => {
  const { inputURL } = req.body;
  //- check form input
  const errorMessage = checkFormInput(inputURL);
  if (errorMessage) {
    return res.render("index", { inputURL, errorMessage });
  }
});

//- listen to server
app.listen(port, () => {
  console.log("Server is listening to http://localhost:3000");
});
