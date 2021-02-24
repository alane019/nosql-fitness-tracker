const db = require("../models");
const path = require("path");

module.exports = function (app) {

// root/index file 
app.get("/", (req, res) => {
  res.status(200).end();
});

// public file
app.get("/stats", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/stats.html"));
});

//public file
app.get("/exercise", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

console.log({db});

//API routes
 //get workouts
app.get("api/workouts", (req, res) => {
    db.Workout.find({})
    .then((dbWorkout) => {
        res.json(dbWorkout);
    })
    .catch((err) => {
        res.json(err);  console.log(err); 
    });
});


//update workouts
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
      res.json(err);  console.log(err);
  });
});


// add new workout
app.post("/api/workouts", ({ body }, res) => {
  db.Workout.create(body)
  .then((dbWorkout) => {
    res.json(dbWorkout); 
  })
  .catch((err) => {
    res.json(err);  console.log(err);
  });
});


//get workouts in a range
app.get("/api/workouts/range", ({ body }, res) => {
  db.Workout.find({})
  .then((dbWorkout) => {
    res.json(dbWorkout); 
  })
  .catch((err) => {
    res.json(err);  console.log(err);
  });
});


};