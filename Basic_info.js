// in-line comment 
/* mult-line comment

see how it can contiune as a go down to a new line

see again...

*/

/* Data Types: In computer science, data is anything that is
meaningful to the computer. There are seven data types in java script.
undefined: has yet to be defined.
null: nothing.
boolean: True or False.
string: any sort of text.
symbol: An immutable primitive value that is unique
number: is a number
object: can store alot of different key value pairs.
*/

/* Variables:
A variable allows computers to store and manipulate data in a dynamic fashion. 
Declaring variables: Note only three ways of defining variables.
*/
var myName = "King" // I can set to other data types later. This can be used throughout your whole program.

myName = 8 // here see the data type has changed.

let ourName  = "King22" // another way of setting a new variable: Can only be used within the scope of your program.

const pi = 3.14 // This remains constant throughout, which is evident by the name.

/* Storing Values with Assigment Operator:

there is a difference between declaring variables and assigning variables.
*/
var a; // declaring a variable
var b = 2; // asigning a variable
console.log(a) // console.log(a) will allow me to see what value a is at a certain point.
a = 7; // assigining variable

b = a;

console.log(a) // see the values of a I will obtain when I look at the console will differ greatly. 

/* Initialising Varibales with Assignment Operator
*/

var a = 9; 

/* Uninitilised Variables */

// Initialise these three variables

var a = 5;
var b = 10;
var c = "I am a ";

// Do not change code below this line

a = a + 1;
b = b + 5; 
c = c + "String"

// Case Sensitivity in Variables: just like in maths.

// Declarations

var studlyCapVar;
var properCamelCase;
var titleCaseOver;

// Assignments

studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;

var sum = 10 + 10;

console.log(sum) // this would show you the addition

var difference = 45 -23;

console.log(difference)

var product = 23*2;

console.log(5*5)

var quoient = 34/2;

console.log(quoient)

// Incrementing

var myVar = 87;

// Only change code below this line
myVar = myVar + 1; // method 1
myVar++; // method 2
console.log(myVar)

// Decrement

var myVar = 11;

// Only change code below this line

myVar = myVar - 1; // method 1
myVar--; // method 2

// Floating point numbers

var ourDecimal = 5.8

// only change code below this line

myDecimal = 0.0004

// The method of multiplying and dividing a decimal is the same as it is for numbers.

// Finding Remainder

var remainder;
remainder = 11 % 3; /*The remainder operator is often used to determine if a number is even or odd.
If you can divide a number by 2 and the remainder is 0, than that means the number is even.
*/

// Compound Assignment with Augmented Addition
var a = 3;
var b = 17;
var c = 12;

// Method 1
a = a + 12;
b = 9 + b;
c = c + 7;

// Method 2: Augmented form
a += 12;
b += 9;
c += 7; 

// Compound Assignment with Augumentted subsraction

var a = 3;
var b = 17;
var c = 12;

// Method 1
a = a - 2;
b = b - 15;
c = c - 7; 

// Method 2: Augmented form
a -= 2;
b -= 15;
c -= 7;

// Compound Assignment with Augumentted multiplition

var a = 15

// Method 1
a = a*2;

// Method 2: Augmented form
a *= 2;

// Compound Assignment with Augumentted division

var b = 108;

// Method 1
b = b/4;

// Method 2: Augmented form 
b/=4;

// declare String values

var firstName = "Alan";
var lastname = "Turing";

// Escaping Literal Quotes in Strings

var myStr = " I am a double \" double quoted\" string inside\"double quotes"

//  use \ to show that they are just quotations marks - note - it won't appear on the console.
// use ' single quotes as well
// use ` use back tick so you can use both single and double quotes.

// Escape Sequences in Strings

/*
\' single quote
\" double quote
\\ backslash

\n newline
\r carriage return
\t tab
\b backspace
\f from feed

*/

// Example of using said 

var myStr = "Firstline\n\t\\SecondLine\n\t\\ThirdLine"

// Concatenating Strings with Plus Operator

// Example: Method 1

var ourStr = "I come first." + "I come second.";

console.log(ourStr)

var ourStr = "I come first.";
ourStr += "I come second";

console.log(ourStr)

// Concatenating Strings with Variables

//Example

var myName = "King";
var myStr = "Hello, my name is " + ourName + ", how are you?";

console.log(myStr);

// Appending Variable with strings

// Example

var anAdjective = "awesome!";
var myStr = "King is";
myStr += anAdjective;

// Find Length of String

// Example 

var firstNameLength = 0;
var firstName = "Ada";

firstNameLength = firstName.length;

console.log(firstNameLength)

// setup 
var lastNameLength = 0;
var lastName = "Lovelace";

lastNameLength = lastName.length;

console.log(lastNameLength)

// Bracket Notation to Find First Character in String

// Example 

var firstLetterOfFirstName = "";
var firstName = "Ada";

firstLetterOfFirstName = firstName[0];

console.log(firstLetterOfFirstName)

// Bracket Notation to Find Nth Character in String

// Setup

var secondLetterOfLastName = "";

secondLetterOfLastName = lastName[1];

console.log(secondLetterOfLastName)

// String Immutability

// Immutability - something incapable of change

// Setup

var myStr = "Jello World";
 
myStr[0] = "H"; // this cannot be a solution to the problem due to the immutability of strings

myStr = "Hello World";

// Bracket Notation to Find Last Character in String

// Example 1

var lastLetterOfFirstName = firstName[firstName.length - 1];

console.log(lastLetterOfFirstName)

// Example 2

var lastLetterOfLastName = lastName[lastName.length - 1];

console.log(lastLetterOfLastName)

// Bracket Notation to Find Nth - to - Last Character in String

// Example 1

var secondLastLetterOfFirstName = firstName[firstName.length - 2];

console.log(secondLastLetterOfFirstName)

// Example 2

var thirdLastLetterOfLastName = lastName[lastName.length - 3];

console.log(thirdLastLetterOfLastName)

// Word Blanks - MadLib game

function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
    // Empty String
    var result = "";
    result += "The " + myAdjective + " " + myNoun  + " " + myVerb + " to the store " + myAdverb;
    // Result
    return result;
}

// Change the words here to test your function

console.log(wordBlanks("dog", "big", "ran", "quickly"));
console.log(wordBlanks("dress", "furry", "skipping", "ghostly"));

// Store Multiple Values with Arrays

/* Arrays allow you to store several pieces of data in one place.
The elements of an array can be various types data, even an array as well.
*/

// Example

var ourArray = ["John", 23];

var myArray = ["Quincy", 1];

// Nested Array 

/* When one of the elements of the array is an array, we call it a nested array.
Also known as a multi-dimensional array. */

// Example
var ourArray = [["The universe", 42], ["everything", 101010]];

// Access Array Data with Indexes 

// Example 
var ourArray = [50, 60, 70];
var ourData = ourArray[0]; // equals 50

console.log(ourArray)

// Modify Array Data with Indexes

ourArray[1] = 45; // ourArray now equals [50, 45, 70]

console.log(ourArray)

// Access Multi-Dimensional Arrays with Indexes

// Setup
var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10, 11, 12], 13, 14] ];

// Selecting 8
var myData = myArray[2][1];

console.log(myData)

// Selecting 11
var myData = myArray[3][0][1];

console.log(myData)

// Manipulate Arrays with push ()

// Example 
var ourArray = ["King", "Queen", "Jack"];
ourArray.push(["K", "Q", "J"]);

// ourArray now equals ["King", "Queen", "Jack", ["K", "Q", "J"] ]

console.log(ourArray)

// Manipulate Arrays with Pop

var ourArray = [1,2,3];
var removedFromOurArray = ourArray.pop();

console.log(removedFromOurArray)
console.log(ourArray)
// removedFromOurArray now equals 3 and ourArray now equals [1,2]

//Note to self: this concept here can be used in finished.

// Manipulate Arrays with shift()
/* Very similar to the pop() function but instead of removing the last
element of the array it removes the first element of the array. */

// Example

var ourArray = ["King", "Queen", "Jack"];
var removedFromOurArray = ourArray.shift(0);

// removedFromOurArray now equals "King" and ourArray now equals ["Queen", "Jack"]

console.log(removedFromOurArray)
console.log(ourArray)

// Manipulate Arrays with unshift()
/* Very similar to the push() function but instead of added an
element to the end of the  array, the unshift () the adds an element 
at the start of the array. */

// Example

var ourArray = ["King", "Queen", "Jack"];
ourArray.shift(); // ourArray now equals ["Queen", "Jack"]
ourArray.unshift("Ace"); // ourArray now equals ["Ace", Queen", "Jack"]"]

console.log(ourArray)

// Shopping List: Another example of a nested Array

var myList = [["cereal", 3], ["milk", 2], ["bananas", 3], ["juice", 2],["eggs", 3] ];

// Write Reusable Code with Functions

// Example

function ourReusableFunction(){
    console.log("Greetings, World");
}

ourReusableFunction();

// Passing Values to Functions with Arguments
/* Parameters are variables that act as place holders for the values
   that are to be input to a function when it is called.  */

// Example 1, a and b are parameters.

function ourFunctionWithArgs(a, b){
    console.log(a-b);
}
ourFunctionWithArgs(10,5); // Outputs 5
ourFunctionWithArgs(45, 5);

// Example 2
function functionWithArgs(a, b){
    console.log(a+b);
}

functionWithArgs(45, 5)

/* Gloabal Scope and Functions
   Scope refers to the visiblity of variables. Variables which are defined 
   outside of a function block have global scope. Global scope means they can
   be seen everywhere in your Javascript code.*/

var myGlobal = 10;

/* The absence of the var keyword means that the variable oopsGlobal is scoped
   globally opposed to locally within the function.
*/
function fun1(){
    oopsGlobal = 5;
}

/* We are using an if statement and we are checking if the type of myGlobal
   does not equal undefined. Since we have declared myGloabal as a variable in global scope
   we expect to get the follwoing result myGlobal: 10.
*/
function fun2(){
    var output = ""
    if (typeof myGlobal != "undefined"){
        output += " myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined"){
        output += " oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
}

/* In the case that both variables are globa, then we get the output of 
   myGlobal: 10 oopsGlobal: 5
*/
fun1();
fun2();

// Local Scope and Functions

/* Variables which are declared within a function as well as the function 
   parameters have local scope. This means they're only visible within the
   function.
*/
//Example 

function myLocalScope(){
    var myVar = 5;
    console.log(myVar);
}

myLocalScope(); // output 5

// This won't work becuase myVar is not global console.log(myVar);
// Note: I am aware that I have declared myVar globally previously.

// Global vs. Local Scope in Functions
































































