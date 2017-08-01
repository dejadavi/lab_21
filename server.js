var express=require('express');
var app=express();
var routes=require('./route');
//var script=require("/public/script.js")

app.use("/kanyetothe",routes);
app.use(express.static(__dirname + "/public"));


var server=app.listen(3000, function(){
    var port=server.address().port;
    console.log("App fired up on http://localhost:%s", port);


});