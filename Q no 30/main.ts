

/*Question no 30
Hello Admin: Make a array of five or more usernames, including the name
 'admin'. Imagine you are writing code that will print a greeting to each
  user after they log in to a website. Loop through the array, and print a 
  greeting to each user:
• If the username is 'admin', print a special greeting, such as Hello admin,
 would you like to see a status report?
• Otherwise, print a generic greeting, such as Hello Eric, thank you for l
ogging in again.*/

let user:string []=["aashir","jia","saim","sarim","husnain"]
for (let i = 0; i < user.length; i++) {
   if (user[1]=== 'admin'){
    console.log('Hello admin, would you like to see a status report?');
  } 
   else {
         console.log("Hello " + user [2] + ", thank you for logging in again.");
  }
}
   