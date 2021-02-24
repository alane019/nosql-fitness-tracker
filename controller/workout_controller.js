
//const express = require("express");
//const mongoose = require("mongoose");
//const app = express.Router();
const db = require("../models");
const path = require("path");

module.exports = function (app) {


//mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/fitness', { useNewUrlParser: true });
//root
app.get("/", (req, res) => {
  res.status(200).end();
});

console.log({db});


//GET: get workout (the main API route: "/api/workouts" )
app.get("api/workouts", (req, res) => {
    db.Workout.find({})
    .then((dbWorkout) => {
        res.json(dbWorkout);
    })
    .catch((err) => {
        res.json(err);
    });
});

//PUT:  Edit workouts ("/api/workouts/:id")
// mongo update method has additional "operator keys"
app.put("/api/workouts/:id", (req, res) => {
    db.Workout.updateOne({
     _id: req.params.id
    }, {
      $push: {
        exercises: req.body
      }
    })
    .then((dbWorkout) => {
        res.json(dbWorkout);
    })
      .catch((err) => {
        res.json(err)
      });
  });

//POST:  add  a new workout



//GET(`/api/workouts/`)  >>> get workouts in a range

// ...........


///////////////////////////////////////////////////////////////////////////////////////////////////////
};