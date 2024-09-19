
/* Question no 15
Changing Guest List: You just heard that one of your guests can’t make the dinner,
 so you need to send out a new set of invitations. You’ll have to think 
 of someone else to invite.

• Start with your program from Exercise 14. Add a print statement at 
the end of your program stating the name of the guest who can’t make it.

• Modify your list, replacing the name of the guest who can’t make
 it with the name of the new person you are inviting.

• Print a second set of invitation messages, one for each person 
who is still in your list.*/
let guest:string[]=["ali","anya","hassan","maiez"];
console.log(guest);

console.log("wlecome to party " +  guest  [0] ,"you wil enjoy for dinner");
console.log("i would like to invite "  + guest  [1],  "and enjoy to dinner");
console.log("i would like to invite "  +  guest [2],  "enjoy dinner");
console.log("wlecome to party  "  +  guest  [3],  "enjoy dinner");
console.log(guest[0]  + "is not come");
guest[0]="mohriz"
console.log(guest);

console.log("welcome my friend  "  +  guest  [0],  "enjoy dinner");


