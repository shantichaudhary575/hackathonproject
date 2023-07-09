var express = require("express");
var router = express.Router();
const Users =require('../models/users');

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("mainpage", { title: "Express" });
});

router.get("/userpage", function (req, res, next) {
  res.render("dashboard");
});

router.get("/signupform", function (req, res, next) {
  res.render("signupform");
});


router.get("/home", function (req, res, next) {
  res.render("Homepage");
});
module.exports = router;
