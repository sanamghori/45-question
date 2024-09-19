/*Question no 31
No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!
• Remove all of the usernames from your array, and make sure the correct message
is printed.*/
var user = ["admin", "sarim", "manahil", "maiez",];
for (var i = user.length - 1; i >= 0; i--) {
    user.pop();
}
if (user.length == 0) {
    console.log("List is empty. We need to find some users!");
}
