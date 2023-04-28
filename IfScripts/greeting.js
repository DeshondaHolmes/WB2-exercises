"use strict"

// assume hour range (military 0-23)
// if the hour is between 1 - 10 : Good morning!
//if the hour is between 10 --17 : Good day!
//otherwise: Good evening!

var time = 19;

//Define the greeting messages

//1.Logic in application
//2.use IF (writing muliptle statement use curly brakets {})
//if ( /* some condition */ ) {
// statement(s);
//}
//3 add ()
//4.in () add a CONDITION //--if used only if condition is true--
// To Build condition = use comparison operators*
//(see how two values relate to each other*)
//** == (returns true if the values are equal)
//** != (returns true if the values are NOT equal)
//** > (returns true if the FIRST value is greater than the SECCOND)
//** >= (returns true if the FIRST value is greater than or equal to the SECOND)
//** < (returns true if the FIRST value is less than the SECOND)
//** <= (returns true if the FIRST value is less than or equal to the SECOND.)






//5.indent Statement after will be executed , multiple statements go in between curly brackets (block of code another condition)
//6.
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
