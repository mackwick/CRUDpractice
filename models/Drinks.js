//DEPENDENCIES
const mongoose = require("./connection");

//SCHEMA
const drinkSchema = new mongoose.Schema({
  name: String,
  liquor: String,
  howMany: Number,
  good: Boolean,
});

//Drink model
const Drink = mongoose.model("Drink", drinkSchema);

module.exports = Drink;
