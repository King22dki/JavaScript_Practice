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

/* It is possible to have both local and global variables with the same 
   name. In this case the local variable takes precedent over the global 
   variable.
*/

// Example

var outerWear = "T-Shirt";  // GLobal variable

function myOutfit(){
    var outerWear = "sweater";

    return outerWear;
}
console.log(myOutfit()); // returns sweater
console.log(outerWear); // gives T-shirt

/* Notice, how the local variable within the local scope of the function
   takes precedent over the global variable. However, if I was to call the 
   variable outerWear outside of the local scope, it would give me T-shirt.
*/

// Return a Value from a Function with Return

// Example

function minusSeven(num){
    return num -7;
}

console.log(minusSeven(10));

console.log(Math.sqrt(4));

console.log(2**2)
 
/* Experimation of using function to create a quadratic formula solver
   I had to declare three different variables.
*/

function quadraticEqSolver(a,b,c){
    var x1 = ((-b + Math.sqrt((b**2)-(4*a*c)))/(2*a));

    var x2 = ((-b - Math.sqrt((b**2)-(4*a*c)))/(2*a));

    var result = "";

    result += "x1" + " " + "=" + " " + x1 + " and " + "x2" + " " + "=" + " " + x2
    return result
}

console.log(quadraticEqSolver(1, 9, 18));

// This is the return I recieved from the debug console (x1 = -3 and x2 = -6).

// Understanding Undefined Value Returned from a Function

// Example

var sum = 0;

function addThree(){
    sum = sum + 3;
}
console.log(addThree()) // Gives response undefined

// It doesn't return anything

// Assignment with a Returned Value

var changed = 0;

function change(num) {
    return (num + 5) / 3;
}
changed = change(10);

console.log(changed)

/* We have assigned a returned value to a variable.
   So we started off with the function change and you 
   pass the number and it's going to return the result of this 
   mathematical expression.
   so when we call the function chnage and pass in the 10, the 
   value that is returned from the function is going to be stord in 
   the variable called changed.

   Note: If anyone has a better idea of things, feel free to suggest how to rephrase
   things, thank you.
*/ 

// Stand in Line

/* In computer science a cue is an abstract data structure where items are kept 
   in order. New items can be added to the back of the cue and old items are taken
   off from the front of the cue.

   Below we are going to simulate this behaviour, well at least some of the functionality
   of a cue using this nextLine function.
*/

// Example

/* In this function, we can add an item to the array that's passed in.
   Then it returns the first item on the list.
*/
function nextInLine(arr, item){
    arr.push(item)
    return arr.shift();

}

var testArr = [1, 2, 3, 4, 5];

// The JSON.stringify is just a way to change an array into a string that can be easily printed out into the console.

console.log("Before: " + JSON.stringify(testArr)); // Before: [1,2,3,4,5]
console.log(nextInLine(testArr, 6)); // 1
console.log("After: " + JSON.stringify(testArr)); // After: [2,3,4,5,6]

/* Boolean  Values:
   Another type of datatype in Javascript.
   They're basically on and off switches.
*/

function welcomeToBooleans(){
    return true;
}

function welcomeToBooleans(){
    return False;
}

/* Use Conditional Logic with If Statements

   An if statement is used to make decisions in code.
   The keyword if tells JavaScript to excute the code in the curly brackets
   under certain conditions defined in the parenthesis.
*/

function ourTrueOrFalse(isItTrue){
    if (isItTrue){
        return "Yes, it's true";
    }
    return "No, it's false";
}

function trueOrFalse(wasThatTrue){
    if (wasThatTrue){
        return "Yes, that was true";
    }
    return "No, that was false";
}

console.log(trueOrFalse(true)); 
console.log(trueOrFalse(false));

/* Comparison with the Equality Operator

   There are many comparison operators in JavaScript that will return a 
   Boolean of true or false. The most common is the equality operator.
   It is usually used in an if statement.
*/

//Example 

function testEqual(val){
    if (val == 12) { 
        return "Equal";
    }
    return "Not Equal";
}

console.log(testEqual(10)); // Not Equal

/* Comparison with the Strict Equality Operator
   
   We learnt about the equality operator "==", now we will learn about the 
   strict equality operator "===". The difference between them is that "=="
   attempts to convert both values being compared to common type while the 
   strict equality operator does not do the type conversion.

   so if we look at the case of 

   3 === 3 this would evaluate to true
   3 === "3" this would evaulate to false
*/

// Example

function testStrict(val){
    if (val === 7){
        return "Equal";
    }
    return "Not Equal";
}

console.log(testStrict(7)); // Equal 
console.log(testStrict("7")); // Not Equal

// Practice Comparing Different Values

// Example

function comapareEquality(a, b){
    if (a == b){
        return "Equal";
    }
    return ("Not Equal");
}

/* The one above will allows to compare differnt types, while the one below
   will allow us to compare only those of the same type.
*/

function comapareEqualityStrict(a, b){
    if (a === b){
        return "Equal";
    }
    return ("Not Equal");
}

console.log(comapareEquality(10, "10")); // Equal
console.log(comapareEqualityStrict(10, "10")); // Not Equal

/* Comparison with the Inequality Operator
   
   The inequality operator is basically the oppiste of the equality operator.
   Just like the equality operator it also does type conversion.
*/

function testNotEqual(val){
    if (val != 99){
        return "Not Equal";
    }
    return "Equal";
}

console.log(testNotEqual(10)) // Not Equal

/* Comparison with the Strict Inequality Operator

    The strict inequality operator is basically the oppiste of the strict equality 
    operator. Just like the strict equality operator it also does not do type 
    conversion.
*/

function testStrictNotEqual(val){

    if (val !== 17) {
        return "Not Equal";
    }
    return "Not Equal";
}

console.log(testStrictNotEqual(17)); // Equal 
console.log(testStrictNotEqual("17")); // Not Equal

/* Comparisons with the Greater Than Operator
   
   I have left this here for more notes on useing the greater than operators.
   
*/

function testGreaterThan(val){
    if (val > 100){
        return "Over 10";
    }
    if (val > 10){
        return "Over 10";
    }

    return "10 or Under";
}

console.log(testGreaterThan(10)); // 10 or Under

/* Comparisons with Greater Than Or Equal To Operator

*/

function testGreaterOrEqual(val){
    if (val >= 20){
        return "20 or Over";
    }

    if (val >= 10){
        return "10 or over";
    }

    return "Less than 10";
}

console.log(testGreaterOrEqual(10)); // 10 Or Over

// Comparison with the Less Than Operator

function testLessThan(val){
    if (val < 25){
        return "Under 25";
    }
    
    if (val < 55){
        return "Under 55";
    }

    return "55 or Over";
}

console.log(testLessThan(10)); // Under 25

// Comparison with the Less Than Or Equal To Operator

function testLessOrEqual(val){
    if (val <= 12){
       return "Smaller Than or Equal to 12"; 
    }

    if (val <= 24){
        return "Smaller Than or Equal to 24";
    }

    return "More Than 24";
}

console.log(testLessOrEqual(10));

/* Comparisons with the Logical And Operator

   This is used in the instance that I want to chec if two
   things are the same at the same time.

   Below we have an example to show an alternative to using an nested if
   statement. We do this be using the And operator, &&.

   25 >= x <= 50    ,   x >= 25 And x <= 50

   The inequality I have shown above can also be considered a conjuction and 
   thus can be rewritten in a form that has an And. 

*/

// Method 1: Nested If statement
function testLogicalAnd_Nested(val){

    if (val <=50){
        if (val >= 25){
            return "Yes";
        }
    }

    return "No";
}

console.log(testLogicalAnd_Nested(10));

function testLogicalAnd(val){
    if (val <= 50 && val >= 25){
        return "Yes";
    }

    return "No";
}

console.log(testLogicalAnd(10));

// Both would produce the same result, it's just that one is easier to code.

/* Comparisons with the Logical Or Operator

   I am assuming what we are emulating in this case is like set notation:

   x < 10 or x > 20

   The mathmatical expression is an example of a disjunction, this statement is
   only false when both statements are false.  

*/

function testLogicalOrIf(val){

    if (val < 10){
        return "Outside";
    }

    if (val > 20){
        return "Outside";
    }

    return "Inside";
}

function testLogicalOr(val){

    if (val < 10 || val > 20){
        return "Outside";
    }

    return "Inside";
}

console.log(testLogicalOrIf(15));
console.log(testLogicalOr(15));

// The same result should be obtained from both of them.

/* Else Statements
   
   When an If statement is true, normally the block of code right after the if 
   statement will be evaluated. If it is not true, nothing happens.

   The introduction of a Else statement, an altenrate of block of code can be excuted 
   in the case of not true.
*/

// Example 1 - Without the else statement
function testElse_Without(val) {

    var result = "";

    if (val > 5){
        result = "Bigger than 5";
    }

    if (val <= 5) {
        result = "5 or smaller";
    }

    return result;    
}

// Example 2 - With else statement 
function testElse(val){
    
    var result = "";

    if (val > 5){
        result = "Bigger than 5";
    } else {
        result = "5 or smaller";
    }

    return result;
}

console.log(testElse(4));

console.log(testElse_Without(4));

/* Else If statements

   If you have multiple conditions that need to be addressed, you can use else
   if statements. It's a way of chaining if statements together.

   In example 1 we have three conditions. In this instance one can use the else If 
   statement. Example 2 illustrates how it would be used. See how both feature 
   the same three conditions.

*/

// Example 1 - Without Else If statement

function testElseIf_Without(val){
    if (val > 10){
        return "Greater than 10"; // condition 1
    }

    if (val < 5){
        return "Smaller than 5"; // condition 2
    }

    return "Between 5 and 10"; // condition 3
}

// Example 2 - Else If statement

function testElseIf(val){
    if (val > 10){
        return "Greater than 10"; // condition 1
    } else if (val < 5){
        return "Smaller than 5"; // condition 2
    }else {
        return "Between 5 and 10"; // condition 3
    }
}

console.log(testElseIf_Without(7)); // Between 5 and 10

console.log(testElseIf(7)); // Between 5 and 10

/* Logical Order in If Else Statements

   When using else if statements, the order becomes very important.
   If you look at the example of the else If statement above, one would notice 
   that there is a certain order in which we prsented the statements so that we
   proceed in a logical order. I haven't included any follow up examples,
   simply becuase of the one I featured before. After all rememeber if the 
   1st condition is satisfied, than it won't check for the other conditions.
*/

/* Chaining If Else Statements

*/

// Example

function testSize(num){
    if (num < 5){
        return "Tiny";
    } else if (num < 10){
        return "Small";
    } else if (num < 15){
        return "Medium";
    } else if (num < 20){
        return "Large";
    } else {
        return "Huge";
    }
}

console.log(testSize(7));

/* Golf code 

   In the game of golf each hole has a par which means the average number of
   strokes you're supposed to use to get the ball into the hole. So depending 
   on how far above or below par your strokes are, there's a differnt nickname.

   So in this example, we had to write a function where we pass in the par and 
   the strokes. This will return the nickname associated with those arguments.
*/

var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!" ];

function golfScore(par, strokes){
    if (strokes == 1){
        return names[0];
    } else if (strokes <= par - 2){
        return names[1];
    } else if (strokes == par - 1){
        return names[2]
    } else if (strokes == par ){
        return names[3]
    } else if (strokes == par + 1){
        return names[4]
    } else if (strokes == par + 2){
        return names[5]
    } else if (strokes == par +3){
        return names[6]
    }   
}

console.log(golfScore(5, 4));

/* Switch Statements

   Instead of using a chanined else if statements you can use a switch statement.
   A switch statement tests a value and can have many case statements which define
   various possible values.
*/

function caseInSwitch(val){
    var answer = "";
    switch(val){
        case 1:
            answer = "alpha";
            break;

        case 2:
            answer = "beta";
            break;

        case 3:
            answer = "gamma";
            break;

        case 4:
            answer = "delta";
            break;
    }

    return answer;
}

/* Default Option in Switch Statements

   The default option is kind of like else in an if else statement.
*/

function switchOfStuff(val) {
    var answer = "";
    switch(val){
        case "a":
            answer = "apple";
            break;

        case "b":
            answer = "bird";
            break;

        case "c":
            answer = "cat";
            break;

        default:
            answer = "stuff";
            break;
    }

    return answer;
}

console.log(switchOfStuff(c))



































