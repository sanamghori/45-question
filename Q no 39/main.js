/*Question no 39
City Names: Write a function called city_country() that takes in the name of a city
and its country. The function should return a string formatted like this:
"Lahore, Pakistan"
Call your function with at least three city-country pairs, and print the value
that’s returned.*/
function city_country(city, country) {
    if (city === void 0) { city = "karachi"; }
    if (country === void 0) { country = "pakistan"; }
    return "".concat(city, ", ").concat(country);
}
console.log(city_country("lahore"));
console.log(city_country("karachi", "pakistan"));
console.log(city_country("Islamabd,"));
