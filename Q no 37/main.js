/*Question no 37
Large Shirts: Modify the make_shirt() function so that shirts are large by default
with a message that reads I love TypeScript. Make a large shirt and a medium shirt
 with the default message, and a shirt of any size with a different message.*/
/*function make_Shirt(size: string = "large", message: string = "I love TypeScript"): void {
   console.log("The size of the shirt is:", size, "and the messsage on the shirt is:", message + ".");
}
make_Shirt();
make_Shirt("medium");
make_Shirt("Very Large", "My name is Zahir");*/
function make_Shirt(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = " i love typescript"; }
    console.log(" the size of shirt:", size, message);
}
make_Shirt();
make_Shirt("mediam", "i love my pakistan");
make_Shirt("extra large", "i love may family");
