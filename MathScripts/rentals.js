// Define inputs
var numPeople = 40;
var vanCapacity = 15;
var vanCost = 250;

// Calculate number of vans and total cost
var numVans = Math.ceil(numPeople / vanCapacity);
var totalCost = numVans * vanCost;

// Calculate cost per person
var costPerPerson = totalCost / numPeople;

// Output result
console.log(`Number of vans needed: ${numVans}`);
console.log(`Total cost of vans: $${totalCost}`);
console.log(`Cost per person: $${costPerPerson}`);
