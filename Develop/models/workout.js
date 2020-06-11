const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  exercise: {
    type: String,
    trim: true,
    required: "Please select your workout"
  },
  name: {
    type: String,
    required: "Enter name of the workout"
  },
  weight:Number ,
  sets: Number,

  Duration: {
    type: Number,
    required: "Duration"
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
