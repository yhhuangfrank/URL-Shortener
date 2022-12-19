//- main router
const router = require("express").Router();
//- sub router
const homeRoute = require("./modules/home");
const shortenRoute = require("./modules/shorten");

//- set route
router.use("/home", homeRoute);
router.use("/", shortenRoute);

module.exports = router;
