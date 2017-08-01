var express=require('express');
var router=express.Router();
var bars = require("./bars.js");

router.get('/', function(req, res){

        res.writeHead(200, { "Content-type": "text/html; charset=utf-8" });
        res.write(bars.quote.randomWord(bars.quote.quotes));
        res.end();
    //res.send("Waddypppp");

});

module.exports=router;