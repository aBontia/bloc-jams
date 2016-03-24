var myName = "Alex", 
    courseTrack = "11", 
    courseType = "BLOC Frontend Development";

//CHAPTER 12 ASSIGNMENT:
//2a.
console.log(3+5);
console.log(12-5);
//2b.
console.log("I\'m enrolled in a course called \"Bloc Frontend Web Development\".\n I\'ve already learned some HTML and CSS, and now I\'m learning JavaScript.\n By the end, I will have learned how to build a complete frontend application.");

//2c.
console.log(5 < 6); 
console.log(5 > 6); 

console.log("5" == myName);
console.log(11 == 21);
console.log("eleven" == 11); 

console.log(myName == "Alex");
console.log(myName === "Alex");
console.log(myName === "Alex" &&  courseTrack === "javascript");
console.log(courseType && "Alex");
console.log(5 === "5");

var monkey = "monkey";
var pluralizedMonkey = monkey + "s"; // stores "monkeys"

var orange = "orange";
var pluralizedOrange = orange + "s"; // stores "oranges"


function pluralize(word) {
    return word + "s"; // makes the pluralized word available after it's called
}
pluralize; // returns the function definition
pluralize("orange");

//Chapter 13 Assignment:--------------------------------------------------------
function helloWorld() {
   return "Hello World!";
}

helloWorld();


var multiply = function(x, y) {
    return x * y;
};

multiply (10, 10)
