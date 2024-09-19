/*Question no 24
More Conditional Tests: You don’t have to limit the number of tests you
 create to 10. If you want to try more comparisons, write more tests.
  Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings
• Tests using the lower case function
• Numerical tests involving equality and inequality, greater than and
 less than, greater than or equal to, and less than or equal to
• Tests using "and" and "or" operators
• Test whether an item is in a array
• Test whether an item is not in a array*/
//Tests for equality and inequality with string 
var s = "wamiq";
console.log("s = " + s);
if (s == "wamiq") {
    console.log("s is equale to wamiq");
}
else if (s != "wamiq") {
    console.log("s is not equale to wamiq");
}
//tests using the lower case function
var s2 = "HELLO";
console.log("s2 =" + s2);
if (s2 == "hello") {
    console.log("s2 is equle to hello");
}
else if (s2.toLocaleLowerCase() == "hello") {
    console.log("s2.toLocaleLowerCase() its not equle to hello");
}
else {
    console.log("s2 its not equale to hello");
}
