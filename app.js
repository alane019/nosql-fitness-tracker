// app server and controller 
const express = require("express");

const app = express();

const logger = require("morgan");
const PORT = process.env.PORT || 3000;


app.use(logger("dev"));
app.use(logger("tiny"));

//middleware 
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// include api routes
var controller = require("./controller/workout_controller.js");

//controller(app);
app.use(controller);

// app listen 
app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`);
});
