
/*Question no 37
Large Shirts: Modify the make_shirt() function so that shirts are large by default 
with a message that reads I love TypeScript. Make a large shirt and a medium shirt
 with the default message, and a shirt of any size with a different message.*/


function make_Shirt (size: string = "large", message: string = " i love typescript"):void {
    
console.log(" the size of shirt:", size,  message );
}
make_Shirt()
make_Shirt("mediam","i love my pakistan")
make_Shirt("extra large","i love my family")