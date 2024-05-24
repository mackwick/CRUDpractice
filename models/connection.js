//DEPENDENCIES
require("dotenv").config();
const mongoose = require("mongoose");
const DATABASE_URL = process.env.DATABASE_URL;

//DATABASE CONNECTION
mongoose.connect(DATABASE_URL);
mongoose.connection
  .on("open", () => console.log("Connected to Mongoose"))
  .on("close", () => console.log("Disconnected from Mongoose"))
  .on("error", () => console.log("error"));

//EXPORT
module.exports = mongoose;

//https://turmeric.seircohort.com/full-stack-development/week-10/day-1/lecture/
