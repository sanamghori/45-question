
/*Question no 41
Magicians: Make a array of magician’s names. Pass the array to a function called
 show_magicians(), which prints the name of each magician in the array.*/

 

function show_magicians(magician_names:string[]) {
    console.log("magicians:");
    for (let i = 0; i < magician_names.length; i++){
         console.log(magician_names[i]);
           }
        }
const magician=["Teller","Criss Angel","David Blaine","Derren Brown"]
show_magicians(magician);