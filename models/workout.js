const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const transactionSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "Type of Workout"
  },
  value: {
    type: String,
    required: "name of workout"
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
