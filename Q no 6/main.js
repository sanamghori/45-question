/*Stripping Names: Store a person’s name, and include some whitespace
characters at
 the beginning and end of the name.
 Make sure you use each character combination,
 "\t" and "\n", at least once. Print the name once,
  so the whitespace around the name is displayed.
Then print the name after striping the white spaces.*/
//stripping name with whitespace
var nameWithWhiteSpace = "\t \n sana ghori \t \n";
console.log("name with wide space:", nameWithWhiteSpace);
var strippedName = nameWithWhiteSpace.trim();
console.log("stripped Name:", strippedName);
var namewithWhiteSpace = "\t \n anaya \t\n";
console.log("name with wide space:", namewithWhiteSpace);
var stripped = namewithWhiteSpace.trim();
console.log("stripped Name:", stripped);
