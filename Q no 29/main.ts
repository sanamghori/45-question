
/*Question no 29
Favorite Fruit: Make a array of your favorite fruits, and then write a series
 of independent if statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.

• Write five if statements. Each should check whether a certain kind of 
fruit is in your array. If the fruit is in your array, the if block should
 print a statement, such as You really like bananas!*/

 let favorite_fruite:string[] = ["mango","apple","grapes"]
 //opper k arry main jo chez mojod hy ossy if ki phli chly gi phir dosra if bhi chly

 if (favorite_fruite.indexOf("mango") !== -1) {
 console.log("you realy like mango");
 }
if (favorite_fruite.indexOf("banana")!== -1) {
    console.log("you realy like banana");
}
 if (favorite_fruite.indexOf("apple")!== -1) {
    console.log("you realy like apple");
}
if (favorite_fruite.indexOf("grapes")!== -1) {
    console.log("you realy like grapes");
}
if (favorite_fruite.indexOf("orange")!== -1) {
    console.log("you realy like orange");
}

     