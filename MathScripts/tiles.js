
// Define inputs
var length = 10;   // in feet
var width = 8;    // in feet
var tilesPerBox = 12;

// Calculate total number of tiles and number of boxes
var totalTiles = (length * width) / (1 * 1);
var numBoxes = Math.ceil(totalTiles / tilesPerBox);

// Output result
console.log("Number of boxes needed: " + numBoxes);

// Define inputs
var length = 10;   // in feet
var width = 8;    // in feet
var tilesPerBox = 12;
var extraPercent = 0.1;

// Calculate total number of tiles and number of boxes
var totalTiles = (length * width) / (1 * 1);
var totalTilesWithExtra = totalTiles * (1 + extraPercent);
var numBoxes = Math.ceil(totalTilesWithExtra / tilesPerBox);

// Output result
console.log("Number of boxes needed: " + numBoxes);
