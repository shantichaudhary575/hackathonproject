var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("mainpage", { title: "Express" });
});

router.get("/header2", function (req, res, next) {
  res.render("header2");
});
router.get("/signupform", function (req, res, next) {
  res.render("signupform");
});

router.get("/header1", function (req, res, next) {
  res.render("header11");
});
module.exports = router;
