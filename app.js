
// app server and controller 

var  express = require("express");

var app = express();



//middleware 

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json());


app.use(express.static("public"));
