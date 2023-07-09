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

router.post("/signup", async function(req, res, next){
  // console.log(req.body)
  debugger
  const users = new Users({
    "name": req.body.name,
    "email" : req.body.email,
    "password": req.body.password,
    "contact": req.body.contact,
    "fieldOfInterest":req.body.fieldOfInterest,
    
    })

  await Users.insertMany(users);
  res.redirect('/')
  //res.render("Homepage");
});
   

  
module.exports = router;
