"Use script"

//calculate federal tax 
//SINGLE FILERS ANNUAL INCOME//


//identify and assign the input
var annualGrossIncome = 42731; //(52 * 821.75)
var filingStatus;
var filingStatus;
////var taxRate =;
//var 12kRate = 0.05;
//var 13k-25kRate = 0.10;
//var 25k-75kRate = 0.15;
//var 75kRate = 0.20;


//initialize output

    var taxRate;
  
    if (filingStatus === 'single') {
      if (annualGrossIncome > 12000) {
        taxRate = 0.05;
      } else if (annualGrossIncome > 13000) {
        taxRate = 0.10;
      } else if (annualGrossIncome  ) {
        taxRate = 0.15;
      } else  {
        taxRate = 0.20;
      } 

    } else if (filingStatus === 'joint') {
      if (annualGrossIncome <= 19900) {
        taxRate = 0.00;
      } else if (annualGrossIncome <= 81050) {
        taxRate = 0.06;
      } else if (annualGrossIncome <= 172750) {
        taxRate = 0.11;
      } else if (annualGrossIncome <= 329850) {
        taxRate = 0.20;
      } 
      
    }
  
    var federalTax = annualGrossIncome * taxRate;
    var federalTax;

  
//output

console.log(`Federal tax for a single filer with $50,000 of income: $${filingStatus}`);
console.log(`Federal tax for a joint filer with $100,000 of income: $${filingStatus}`);