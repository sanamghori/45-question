//question no 3 upper case lower case and tital case
var personName = "ZaHiR Khan";
console.log("Original Name: " + personName);
console.log("Lower case: " + personName.toLowerCase());
console.log("Upper case: " + personName.toUpperCase());
//,charat(0) ye variable ka first letter uppercase main othy ga 
//or.slice(1) baki sary letter lowercase main othy ga
console.log("Titlecase: " + personName.charAt(0).toUpperCase() + personName.slice(1).toLowerCase());
// ye function hay to () ye zaror lGY GA at the end words
var person = "wamiq khan";
console.log("my name: " + person);
console.log("to uppercase: " + person.toLocaleUpperCase());
console.log("to lowercase: " + person.toLocaleLowerCase());
console.log("tital case: " + person.charAt(0).toLocaleUpperCase() + person.slice(1).toLocaleLowerCase());
//*Famous Quote 2: Repeat Exercise 4, but this time store the famous
//person’s name in a variable called famous_person. 
//Then compose your message and store it
//in a new variable called message. Print your message.*//
// Question no 4
var Author = "Hazrat muhmmad pbuh";
var FamousQuote = "The reward of deeds depends upon the intentions";
console.log("".concat(Author, " once said,\"").concat(FamousQuote, "\""));
//assigment # 5
var famPerson = "Hazrat muhmmad pbuh";
var message = "".concat(Author, " once said,\"").concat(FamousQuote, "\"");
console.log(message);
var leder = "imran khan";
var dailog = "apnay ghabrananhi hy";
console.log("".concat(leder, " said,\"").concat(dailog, "\""));
