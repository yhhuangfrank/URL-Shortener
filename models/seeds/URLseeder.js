//- require URL model
const URL = require("../URL");
//- require URLseed
const URLseeds = require("../../URLseed.json").list;
//- connect to db
const db = require("../../config/mongoose");

db.once("open", () => {
  URL.insertMany(URLseeds)
    .then(() => console.log("seed data added successfully!!"))
    .catch((err) => console.log(err));
});
