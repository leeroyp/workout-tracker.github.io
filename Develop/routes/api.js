const db = require("../Develop/models");


module.exports = function (app) {

  app.get("/api/workouts", function (req, res) {
     Workout.find()
          .then(data => {
              res.json(data)
          })
          .catch(err => {
              res.json(err)
          })
  });
}