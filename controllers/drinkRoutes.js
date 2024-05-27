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

//delete
router.delete("/:id", async (req, res) => {
  try {
    res.json(await Drink.findByIdAndDelete(req.params.id));
  } catch (err) {
    res.status(400).json(err);
  }
});

//update
router.put("/:id", async (req, res) => {
  try {
    res.json(await Drink.findByIdAndUpdate(req.params.id, req.body));
  } catch (err) {
    res.status(400).json(err);
  }
});

//create
router.post("/", async (req, res) => {
  try {
    const drink = await Drink.create(req.body);
    res.json(drink);
  } catch (err) {
    res.status(400).json(err);
  }
});

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
