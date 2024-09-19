
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
let s="wamiq";
console.log("s = "+ s);
if (s=="wamiq") {
  console.log("s is equale to wamiq");
  
}else if (s!="wamiq") {
  console.log("s is not equale to wamiq");
}

//tests using the lower case function
let s2="HELLO";
console.log("s2 ="+s2);
if (s2=="hello") {
  console.log("s2 is equle to hello");
}
else if (s2.toLocaleLowerCase()=="hello") {
  console.log("s2.toLocaleLowerCase() its not equle to hello" );
}else{
  console.log("s2 its not equale to hello");
}
// Numerical tests involving equality and inequality, greater than and
 //less than, greater than or equal to, and less than or equal to
let num1=10;
let num2=10;
let num3=30;
if (num1==num2) {
  console.log( num1,"=", num2);
}if (num1==num3) {
  console.log(num1,"=",num3);
}if (num2==num3) {
  console.log(num2,"=",num3);
}
//Inequality test
if (num1!=num2) {
  console.log(num1, "its not equale to" ,num2);
}if (num2!=num3) {
  console.log(num2,"its not equale",num3);
}if (num1!=num3) {
  console.log(num1,"its not equle",num2);
}
//// Greater than or less than equal to
if (num1 >= num2) {
  console.log(num1, "is greater than or equal to", num2);
}
else if (num1 <= num2) {
  console.log(num1, "is smaller than or equal to", num2);
}

if (num2 >= num3) {
  console.log(num2, "is greater than or equal to", num3);
}
else if (num2 <= num3) {
  console.log(num2, "is smaller than or equal to", num3);
}

if (num1 >= num3) {
  console.log(num1, "is greater than or equal to", num3);
}
else if (num1 <= num3) {
  console.log(num1, "is smaller than or equal to", num3);
}

//AND OR operators
let value1=true;
let value2=false;
if (value1 && value2) {
  console.log(value1 && value2);//AND&& operation two values: TRUE(AND)FALSE=FALSE
}
else {
  console.log("Answer of AND operation is: ", value1 && value2);
}

// OR operator
if (value1 || value2) {
  console.log("Answer of OR operation is: ", value1 || value2); //OR||operation two values TRUE(OR)FALSE=TRUE
}
else {
  console.log("Answer of OR operation is: ", value1 || value2);
}


//Test whether an Item is in array or not
console.log("\n5. Element is in array or not: ");

let array1: number[] = [5, 6, 7];
let num: number = 6;

if (array1.indexOf(num) != -1) {
  console.log(num + " is present in the array.");
}
else if (array1.indexOf(num) == -1) {
  console.log(num + " is not present in the array.");
}