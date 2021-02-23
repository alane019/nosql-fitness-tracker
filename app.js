
// app server and controller 

const  express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

// require mongoose schema file 
var db = require("./workout");



const app = express();

app.use(logger("dev"));


// PORT 
const PORT = process.env.PORT || 3000; 




//middleware 
app.use(express.json());


// connection string 
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });


//serve public files
app.use(express.static("public"));

// * api routes
//  ....


// app listen
app.listen(PORT, () => {

    if(PORT === process.env.PORT){
        console.log(`App running PORT: ${PORT}`);
    } else {
        console.log(`App listening at http://localhost:${PORT}`);
    }
  
});
