
/*question no 42
Great Magicians: Start with a copy of your program from Exercise 39. 
Write a function called make_great() that modifies the array of magicians
 by adding the phrase the Great to each magician’s name. Call show_magicians() 
 to see that the list has actually been modified.*/

function show_magicians(magician_names:string[]) {
    for (let i = 0; i < magician_names.length; i++) {
     console.log(magician_names[i]);
    }}
function make_great(magician_names:string[]) {
    for (let i = 0; i < magician_names.length; i++) {
     magician_names[i] = "the great  "+ magician_names[i];   
    }}
    const magician=["David Blaine","Criss Angel","Derren Brown","Lance Burton"];
    console.log("orignal magician: ");
    show_magicians(magician);
    make_great(magician);
    console.log("\n moodified  magician :");
    show_magicians(magician);
    