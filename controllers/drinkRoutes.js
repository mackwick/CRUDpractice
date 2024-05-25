//DEPENDENCIES
const express = require("express");
const Drink = require("./../models/Drinks");

const router = express.Router();

//ROUTES
//index
router.get("/", async (req, res) => {
  try {
    res.json(await Drink.find({}));
  } catch (err) {
    res.status(400).json(err);
  }
});

//new

//delete

//update

//create

//edit

//show
router.get("/:id", async (req, res) => {
  try {
    const drink = await Drink.findById(req.params.id);
    res.json(drink);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
