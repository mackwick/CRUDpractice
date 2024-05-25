//DEPENDENCIES
require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const methodOverride = require("method-override");
const DrinkRouter = require("./controllers/drinkRoutes");

const app = express();

//MIDDLEWARE
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use("/drinks", DrinkRouter);

//ROOT ROUTE
app.get("/", (req, res) => {
  res.send("<h1>Here's the root</h1>");
});

//SERVER LISTENER
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
