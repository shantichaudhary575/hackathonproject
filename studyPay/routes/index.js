var express = require("express");
var router = express.Router();
const Users = require("../models/users");

/* GET home page. */
router.get("/userpage", function (_req, res, _next) {
  Users.find().then((users) => {
    res.render("dashboard", {
      name: "study pay",
      userList: users,
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

  await Users.insertMany(users);
  res.redirect("/userpage");
  //res.render("Homepage");
  // router.get("/search", async function(req, res, next) {
  //   const query = req.query.q; // Get the search query from the request query parameters

  //   try {
  //     const searchResults = await Users.find({
  //       fieldOfInterest: { $regex: new RegExp(query, "i") }
  //     }).exec();

  //     res.render("searchResults", { results: searchResults });
  //   } catch (error) {
  //     console.error(error);
  //     res.status(500).send("An error occurred during the search.");
  //   }
  // });

  // router.get("/search", async function(req, res, next) {
  //   const query = req.query.q; // Get the search query from the request query parameters

  //   try {
  //     const searchResults = await Users.find({
  //       fieldOfInterest: { $regex: new RegExp(query, "i") }
  //     }).exec();

  //     res.render("mainpage", { title: "Express", results: searchResults });
  //   } catch (error) {
  //     console.error(error);
  //     res.status(500).send("An error occurred during the search.");
  //   }
  // });

  // router.get("/search", async function(req, res, next) {
  //   const query = req.query.q; // Get the search query from the request query parameters

  //   try {
  //     const searchResults = await Users.find({
  //       fieldOfInterest: { $regex: new RegExp(query, "i") }
  //     }).exec();

  //     res.render("dashboard", { results: searchResults });
  //   } catch (error) {
  //     console.error(error);
  //     res.status(500).send("An error occurred during the search.");
  //   }
  // });
});

module.exports = router;
