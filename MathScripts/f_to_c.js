"use strict"
// convert Fahrenheit to Celsius

var currentFahrenheit = 100;
var baseTemp = 32;
var numFrac = 5/9;


//formula
var convertedCelsius = (currentFahrenheit - baseTemp) * numFrac;

// output
console.log(currentFahrenheit + " degrees Fahrenheit is " + convertedCelsius.toFixed(4) +" degrees celsius." );