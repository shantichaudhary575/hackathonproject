var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("mainpage", { title: "Express" });
});

router.get("/signupform", function (req, res, next) {
  res.render("signupform");
});


router.get("/home", function (req, res, next) {
  res.render("Homepage");
});
module.exports = router;
