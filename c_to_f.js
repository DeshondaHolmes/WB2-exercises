// convert Celsius to Fahrenheit
var currentCelsius = 40;
var baseTemp = 32;
var numFrac = 9/5;


//formula
var convertedFahrenheit = (currentCelsius * numFrac) + baseTemp;

// output
console.log(currentCelsius + " degrees celsius is " + convertedFahrenheit ," degrees fahrenheit." );