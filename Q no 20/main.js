/*question no 20
Think of something you could store in a array. For example,
you could make a list of mountains, rivers, countries, cities,
 languages, or anything else you’d like. Write a program that
 creates a list containing these items.*/
var s;
var languages = ["urdu", "sindhi", "panjabi", "english", "bilochi"];
console.log("language spoken in pakistan are");
for (var i = 0; i < languages.length; i++) {
    s = i;
    console.log(++s, languages[i]);
}
