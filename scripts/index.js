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
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 785049324b02695159e3f2a60e49fa180a208012

//Chapter 14 Assignment:--------------------------------------------------------
var favoriteNumber = function(fav, guess){
    if (guess > fav) 
    { return "Too high"; }  
  else if 
    (guess < fav) 
    { return "Too low";}
  else if 
    (guess == fav) 
    { return "You got it!"; }
};
//---------------------------------------------

var checkLock = function(num01, num02, num03, num04){
  if(num01 !== 3 && num01 !== 5 && num01 !== 7){ return "incorrect"; }
    else if 
      (num02 !== 2) { return "incorrect"; }
    else if 
      (num03 < 5 || num03 > 100) {return "incorrect"; }
    else if 
      (num04 >= 9 && num04 <= 20) {return "incorrect";}
    else 
      {return "correct";}
};
//---------------------------------------------

var canIGet = function(item, money) {
  if 
    (item == 'MacBook Air' && money >= 999)    {return true;}
  else if
    (item == 'MacBook Pro' && money >= 1299)   {return true;}
  else if 
    (item == 'Mac Pro' && money >= 2499)       {return true;}
  else if
    (item == 'Apple Sticker' && money >= 1)    {return true;}
  else
    {return false;}
}; 

<<<<<<< HEAD
//Chapter 15 Assignment:--------------------------------------------------------
=======
>>>>>>> Ch-13Assn
=======
>>>>>>> 785049324b02695159e3f2a60e49fa180a208012
