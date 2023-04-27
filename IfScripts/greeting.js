"use strict"


// Get the current hour
var time = 19;

//Define the greeting messages


var greeting;
if ( time < 10) {
    greeting = "Good morning!";
} else if (time < 17) {
    greeting = "Good day!";
} else {
    greeting = "Good evening!";
}



// Display the greeting message

console.log(greeting);
