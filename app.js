//- require related modules
const express = require("express");
const exphbs = require("express-handlebars");
const URL = require("./models/URL");
const { checkFormInput, urlShortener } = require("./config/processor");
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
  const { originalURL } = req.body;
  //- check form input
  const invalidMessage = checkFormInput(originalURL);
  if (invalidMessage) {
    return res.render("index", { originalURL, invalidMessage });
  }
  //- create shorter URl
  const shorterURL = urlShortener();
  return URL.create({
    shorterURL,
    originalURL,
  })
    .then(() => res.render("index", { originalURL, shorterURL }))
    .catch((err) => {
      console.log(err);
      return res.render("error", { error: err.message });
    });
});

//- listen to server
app.listen(port, () => {
  console.log("Server is listening to http://localhost:3000");
});
