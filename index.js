var express = require("express");
var app = express();

app.get('/', function(req, res){
  res.json({message:"Hello From JS Object"});
});




app.listen(3000,function(){
console.log("Server Started at Port 3000");
});
