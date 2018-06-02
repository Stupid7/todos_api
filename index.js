var express = require("express");
var app = express();
var todoRoutes = require("./routes/todos");
var bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/', function(req, res){
  res.json({message:"Hello From JS Object"});
});

app.use("/api/todos", todoRoutes);


app.listen(3000,function(){
console.log("Server Started at Port 3000");
});
