/*question no 44
Sandwiches: Write a function that accepts a array of items a person wants on a
sandwich. The function should have one parameter that collects as many items as
 the function call provides, and it should print a summary of the sandwich that
 is being ordered. Call the function three times, using a different number of
 arguments each time.*/
function printItems() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("The sandwhich contain items: " + items);
}
printItems("Chicken");
printItems("Chicken", "Mayo");
printItems("Chicken", "Ketchup", "Cheese");
function sandwhich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("the sandwhich items:" + items);
}
sandwhich("beef");
sandwhich("chicken");
sandwhich("mayo", "cheese");
