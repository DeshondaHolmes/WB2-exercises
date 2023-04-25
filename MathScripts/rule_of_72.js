

// sample inputs
var savingsAccount = 10000;
var interestRate = 0.06;
var totalYears = 12;
var doubleyear = 2;

// calculations
var totalTime =  totalYears / interestRate ;
var totalSavings = savingsAccount * doubleyear


// output

console.log(
    "At a " + interestRate.toFixed(2) +" interest rate"+ " your savings will be worth " + totalSavings + " in " + totalYears.toFixed(1) + " years.");
   