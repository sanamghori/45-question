/*Question no 33
Ordinal Numbers: Ordinal numbers indicate their position in a array, such
as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
• Store the numbers 1 through 9 in a array.
• Loop through the array.
• Use an if-else chain inside the loop to print the proper ordinal ending
for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th",
 and each result should be on a separate line.*/
var number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var _i = 0, number_1 = number; _i < number_1.length; _i++) {
    var digit = number_1[_i];
    var ordinalSuffix = void 0;
    if (digit === 1) {
        ordinalSuffix = 'qs';
    }
    else if (digit === 2) {
        ordinalSuffix = 'ts';
    }
    else if (digit === 3) {
        ordinalSuffix = 'ds';
    }
    else {
        ordinalSuffix = 'th';
    }
    console.log("".concat(digit).concat(ordinalSuffix));
}
/*question no 34
Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza
names in a array, and then use a for loop to print the name of each pizza.
• Modify your for loop to print a sentence using the name of the pizza instead
of printing just the name of the pizza. For each pizza you should have one line
of output containing a simple statement like I like pepperoni pizza.
• Add a line at the end of your program, outside the for loop, that states
how much you like pizza. The output should consist of three or more lines about
the kinds of pizza you like and then an additional sentence, such as I really
 love pizza!*/
var favorite_pizza = ["malaipizza", "tikkapizza", "dobulecoted"];
console.log("pizza names");
for (var _a = 0, favorite_pizza_1 = favorite_pizza; _a < favorite_pizza_1.length; _a++) {
    var pizza = favorite_pizza_1[_a];
    console.log(pizza);
}
for (var _b = 0, favorite_pizza_2 = favorite_pizza; _b < favorite_pizza_2.length; _b++) {
    var pizza = favorite_pizza_2[_b];
    console.log("i like ".concat(pizza, "pizza"));
}
/* const favoritePizzas: string[] = ['Malai Boti', 'Chicken Tikka', 'BBQ Chicken'];

 console.log('Pizza Names:');
 for (const pizza of favoritePizzas) {
     console.log(pizza);
 }
 
 for (const pizza of favoritePizzas) {
     console.log(`I like ${pizza} pizza.`);
 }*/ 
