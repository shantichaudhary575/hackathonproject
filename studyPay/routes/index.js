var express = require("express");
var router = express.Router();
const Users = require("../models/users");
const Jobs = require("../models/jobs");

/* GET home page. */
router.get("/userpage", function (_req, res, _next) {
  Jobs.find().then((jobs) => {
    res.render("dashboard", {
      name: "study pay",
      jobsList: jobs,
    });
  });
});

router.get("/", function (req, res, next) {
  res.render("mainpage", { title: "Express" });
});

router.get("/userpage", function (req, res, next) {
  res.render("dashboard");
});

router.get("/signupform", function (req, res, next) {
  res.render("signupform");
});
router.get("/jobslist", function (req, res, next) {
  res.render("jobslist");
});
router.get("/addjob", function (req, res, next) {
  res.render("jobsadd");
});
router.get("/applyjob", function (req, res, next) {
  res.render("applyjob");
});

router.get("/jobdetail/:id", async function(req,res,next){
  const job = await Jobs.findOne({_id: req.params.id})
  console.log(job.position, req.params.id)
   res.render('jobdetail', {job})
});
router.post("/addJob", async function (req, res, next) {
  let job = new Jobs({
    company_name: req.body.company_name,
    position: req.body.position,
    job_description: req.body.job_description,
    contact: req.body.contact,
    fieldOfInterest: req.body.fieldOfInterest,
  });

  await Jobs.insertMany(job);
  res.redirect("/userpage");
});

router.get('/delete/:index',async function(req,res,_next){

   console.log(req.params.index);
//  users.splice(req.params.index,1)
await Users.deleteOne({_id:req.params.index})
 res.redirect('/userpage')
});

router.post("/signup", async function (req, res, next) {
  // console.log(req.bonodedy)
  debugger;
  let users = new Users({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    contact: req.body.contact,
    fieldOfInterest: req.body.fieldOfInterest,
  });

  await Users.insertMany(users);
  res.redirect("/userpage");
});

router.get("/search", async function (req, res, next) {
  const query = req.query.q; // Get the search query from the request query parameters

  try {
    const searchResults = await Users.find({
      fieldOfInterest: { $regex: new RegExp(query, "i") },
    }).exec();

    res.render("dashboard", { title: "Express", results: searchResults });
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred during the search.");
  }
});

module.exports = router;
