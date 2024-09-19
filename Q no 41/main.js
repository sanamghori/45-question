/*Question no 41
Magicians: Make a array of magician’s names. Pass the array to a function called
 show_magicians(), which prints the name of each magician in the array.*/
function show_magician(magician_names) {
    console.log("Magicians: ");
    for (var i = 0; i < magician_names.length; i++) {
        console.log(magician_names[i]);
    }
}
var magicians = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Harry Potter"];
show_magicians(magicians);
function show_magicians(magician_names) {
    console.log("magicians:");
    for (var i = 0; i < magician_names.length; i++) {
        console.log(magician_names[i]);
    }
}
var magician = ["Teller", "Criss Angel", "David Blaine", "Derren Brown"];
show_magician(magician);
