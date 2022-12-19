//- require mongoose 
const mongoose = require("mongoose")

//! connect to db
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config()
}

mongoose.connect(process.env.MONGODBURI)

const db = mongoose.connection
db.on("error", () => {
  console.log("MongoDB connect error!!")
})
db.once("open", () => {
  console.log("MongoDB connect success!!")
})

//- export db
module.exports = db