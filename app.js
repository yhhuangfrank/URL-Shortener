//- require related modules
const express = require("express");
const exphbs = require("express-handlebars");

const router = require("./routes/index")
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
//- use router
app.use(router)

//- listen to server
app.listen(port, () => {
  console.log("Server is listening to http://localhost:3000");
});
