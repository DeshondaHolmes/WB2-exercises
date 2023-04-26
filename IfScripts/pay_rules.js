"use strict";
// Input variables
var payRateOver40 = 17.30;
var hoursWorkedOver40 = 45;
var overtimeHoursOver40 = 5;
var regularHours = 40;
var payRateExactly40 = 25.00;
var payRateUnder40 = 12.50;
var hoursUnder40 = 20;


//Calculate gross pay

var grossPayOvertime;
if (hoursWorkedOver40 <= 40) {
    grossPay = payRate * hoursWorked;
} else {
    var overtimeHours = hoursWorked - 40;
    grossPay = (40 * payRate) + (overtimeHours * (payRate * 1.5));
}

var grossPayUnder40;
if (hoursWorked <= 40) {
    grossPay = payRate * hoursWorked;
} else {
    var overtimeHours = hoursWorked - 40;
    grossPay = (40 * payRate) + (overtimeHours * (payRate * 1.5));
}

var grossPay;
if (hoursWorked <= 40) {
    grossPay = payRate * hoursWorked;
} else {
    var overtimeHours = hoursWorked - 40;
    grossPay = (40 * payRate) + (overtimeHours * (payRate * 1.5));
}
// Display the result
console.log("Gross pay is the amount $ " + grossPay.toFixed(2) + " if a person works more than " + regularHours + " hours." );
console.log("Gross pay is $ " + grossPay.toFixed(2))