/*Question no 16
More Guests: You just found a bigger dinner table, so now more space is available. 
Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of 
your program informing people that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. • 
Use append() to add one new guest to the end of your list. • 
Print a new set of invitation messages, one for each person in your list.*/

let guest:string[]=["ali","anya","hassan","maiez"];
console.log(guest);

console.log("wlecome to party " +  guest  [0] ,"you wil enjoy for dinner");
console.log("i would like to invite "  + guest  [1],  "and enjoy to dinner");
console.log("i would like to invite "  +  guest [2],  "enjoy dinner");
console.log("wlecome to party  "  +  guest  [3],  "enjoy dinner");
console.log(guest [0]  + "is not come");
// ali ki jaga mohriz ko add kia
guest[0]="mohriz"
console.log(guest);
console.log("welcome my friend  "  +  guest  [0],  "enjoy dinner");

function append(newguest:string):void {
    guest.push(newguest)
}
console.log("excuries 16");
console.log(" Add one new guest to the beginning of your array add one new guest to middle of my array");
// add start
guest.unshift("jia");
//end add
append("kamran");
//jo area remove krna os ka index likhna phir jo 
//add karna os ka index then name with string
// add middile
guest.splice(2,0,"tania");
console.log("i would like to invite " +   guest [0] , "to dinner");
console.log("i would like to invite " +   guest [1] , "to dinner");
console.log("i would like to invite " +   guest [2] , "to dinner");
console.log("i would like to invite " +   guest [3] , "to dinner");
console.log("i would like to invite " +   guest [4] , "to dinner");

//excuries 17
/* Question no 17
Shrinking Guest List: You just found out that your new dinner table 
won’t arrive in time for the dinner, and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message
 saying that you can invite only two people for dinner.

• Remove guests from your list one at a time until only two names 
remain in your list. Each time you pop a name from your list, print a 
message to that person letting them know you’re sorry you can’t invite
 them to dinner.

• Print a message to each of the two people still on your list, letting 
them know they’re still invited.

• Remove the last two names from your list, so you have an empty list.
 Print your list to make sure you actually have an empty list at the 
 end of your program.*/

 console.log("question no 16");
 console.log("you can invite only two people");
 console.log("dear", guest [6] ,"i can not invite you dinner");
 guest.pop()
 console.log("dear", guest [5] ,"i can not invite you dinner");
 guest.pop()
 console.log("dear", guest [4] ,"i can not invite you dinner");
 guest.pop()
 console.log("dear", guest [3] ,"i can not invite you dinner");
 guest.pop()
 console.log("dear", guest [2] ,"i can not invite you dinner");
guest.pop()
 console.log("dear", guest [1] ,"i can not invite you dinner");
guest.pop()
 console.log("dear", guest [0] ,"i can not invite you dinner");
 guest.pop()
 console.log("guest array:",guest);
 