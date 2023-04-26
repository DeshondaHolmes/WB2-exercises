"use strict"


// Get the current hour
var now = new Date();
var currentHour = now.getHours();

// Define the greeting messages
var greeting;
if (currentHour >= 10 && currentHour < 23) {
    greeting = "Good morning!";
} else if (currentHour  && currentHour < 18) {
    greeting = "Good afternoon!";
} else {
    greeting = "Good evening!";
}

var greeting;
if (currentHour >= 10 && currentHour < 23) {
    greeting = "Good morning!";
} else if (currentHour  && currentHour < 18) {
    greeting = "Good afternoon!";
} else {
    greeting = "Good evening!";
}
// Display the greeting message
console.log(greeting);
