// Require all the  thre packages we will be using 
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");


const PORT = process.env.PORT || 8080;
// var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/workout-tracker"
const app = express();

app.use(morgan('dev'))

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout-tracker", {
  useNewUrlParser: true,
});

const db = require('./models');


// route
require("./routes/api")(app)
require("./routes/html")(app)


app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
