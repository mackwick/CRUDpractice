//DEPENDENCIES
require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const methodOverride = require("method-override");

const app = express();

//MIDDLEWARE

//ROUTES
app.get("/", (req, res) => {
  res.send("<h1>Here's the root</h1>");
});

//SERVER LISTENER
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
