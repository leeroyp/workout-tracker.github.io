const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const path = require("path")


const PORT = process.env.PORT || 8080;

const app = express();

app.use(morgan('combined'))

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout-tracker", {
  useNewUrlParser: true,
});

const db = require('./models');

// app.get('/', function (req, res) {
//   res.send('hello, world!')
// })

app.get("/exercise", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

// route
app.use(require("./routes/api.js"));
app.use(require("./routes/html.js"));



app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
