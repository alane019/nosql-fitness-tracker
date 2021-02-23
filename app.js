
// app server and controller 

const  express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const app = express();

app.use(logger("dev"));


// PORT 
const PORT = process.env.PORT || 3000; 


// * add path to schema files in models dir
// ... 


//middleware 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//mongoose connection string 
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
