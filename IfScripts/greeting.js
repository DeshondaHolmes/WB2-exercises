"use strict"


// Get the current hour
var d = new Date();
var time = d.getTime();

//Define the greeting messages

var greeting;
if ( time < 5) {
    greeting = "Good morning!";
} else if (time < 10) {
    greeting = "Good afternoon!";
} else {
    greeting = "Good evening!";
}


var greeting;
if ( time => 10) {
    greeting = "Good morning!";
} else if (time < 10) {
    greeting = "Good afternoon!";
} else {
    greeting = "Good evening!";
}


 var greeting;
if ( time < 10 && d == 5) {
    greeting = "Good morning!";
} else if (time < 10) {
    greeting = "Good afternoon!";
} else {
     greeting = "Good evening!";
}



// Display the greeting message

console.log(greeting);
