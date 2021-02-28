const db = require("../models");
const path = require("path");
const express = require("express");
const app = express();
const router = require("express").Router();
let mongoose = require("mongoose"); 

//let arrVars = new Array(({db}).toString(), ({path}).toString(), ({express}).toString(), ({app}).toString(), ({router}).toString(), ({mongoose}).toString()).toString()

console.dir(db, path, express, app, router, mongoose)


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/fitness", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});



// root/index file 
router.get("/", (req, res) => {
  res.status(200).end();
});

// public file
router.get("/stats", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/stats.html"));
});

//public file
router.get("/exercise", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

console.log({db});

//API routes
 //get workouts
router.get("/api/workouts", (req, res) => {
    db.Workout.find({})
    .then((dbWorkout) => {
        res.send(dbWorkout);
    })
    .catch((err) => {
        res.send(err);   
    });
});


//update >> create new workout
router.put("/api/workouts/:id", (req, res) => {
    db.Workout.updateOne({
     _id: req.params.id
    }, {
      $push: {
        exercises: req.body
      }
    })
    .then((dbWorkout) => {
        res.send(dbWorkout);
    })
    .catch((err) => {
      res.send(err);  //console.log(err);
  });
});


// add new workout
router.post("/api/workouts", ({ body }, res) => {
  db.Workout.create(body)
  .then((dbWorkout) => {
    res.json(dbWorkout); 
  })
  .catch((err) => {
    if (err) {
      throw (err);
    } else {
      res.status(400);
    }
    //console.log(err);  /*  res.json(err); */
  });
});


//get workouts in a range
router.get("/api/workouts/range", ({ body }, res) => {
  db.Workout.find({})
  .then((dbWorkout) => {
    res.json(dbWorkout); 
  })
  .catch((err) => {
    res.json(err);  console.log(err);
  });
});


process.on('uncaughtException', err => {
  console.log(err);
})

module.exports = router;