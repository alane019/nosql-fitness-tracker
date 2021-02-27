// app server and controller 
const  express = require("express");
const app = express();
const logger = require("morgan");
const PORT = process.env.PORT || 3000;
let mongoose = require("mongoose"); 

app.use(logger("dev"));

app.use(logger("tiny"));

//middleware 
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/fitness", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});

// include api routes
var controller = require("./controller/workout_controller.js");
controller(app);


// app listen 
app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`);
});

