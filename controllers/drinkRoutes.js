//DEPENDENCIES
const express = require("express");
const Drink = require("./../models/Drinks");

const router = express.Router();

//ROUTES
//index
router.get("/", async (req, res) => {
  const drinks = await Drink.find({});
  res.send(drinks);
});

//new

//delete

//update

//create
router.post("/", async (req, res) => {
  const newDrink = await Drink.create(req.body);
  res.redirect("/drinks");
});

//edit

//show

module.exports = router;
