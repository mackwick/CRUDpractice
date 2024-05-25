//DEPENDENCIES
const mongoose = require("./connection");

//SCHEMA
const drinkSchema = new mongoose.Schema({
  name: { type: String, required: true },
  liquor: { type: String, required: true },
  howMany: { type: Number, required: true },
  good: { type: Boolean, required: true },
});

//Drink model
const Drink = mongoose.model("Drink", drinkSchema);

module.exports = Drink;
