
$(document).ready(function(){

$("#button").on('click', function(event){
    $.get("/kanyetothe")
    .done(function (data) {
        console.log(data);
        $("#output").text(data);
    });

});

});

//var express = require('express');