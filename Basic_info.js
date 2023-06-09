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

console.log(switchOfStuff(c)); // Note this is type specfic, so we will get back stuff.

/* Multiple Identical Options in Switch Statements:

   Sometimes you want a switch statement where multiple inputs give the same output.
   This can be done by omitting the break statement.

*/

function sequentialSizes(val){
    var answer = "";
    switch(val){
        case 1:
        case 2:
        case 3:
            answer ="Low";
            break;
        case 4:
        case 5:
        case 6:
            answer ="Mid";
            break;
        case 7:
        case 8:
        case 9:
            answer ="High";
            break;
    }

    return answer;
}

/* Replacing If Else Chains with Switch

   Sometimes a switch statement can be easier to write and easier to understand
   than a chain of if else statements.
*/

// Example 1: Chain statement that is going to be changed.

function chain(val){
    var answer = "";

    if (val === "Bob"){
        answer = "Marley";
    } else if (val === 42) {
        answer = "The Answer";
    } else if (val === 1) {
        answer = "There is no #1";
    } else if (val === 99) {
        answer = "Missed me by this much";
    } else if (val === 7) {
        answer = "Ate Nine";
    }

    return answer;

}

// Example 2: Chain to switch
function chainToSwitch(val){
    var answer = "";

    switch(val){
        case "Bob":
            answer = "Marley";
            break;
        case  42:
            answer = "The Answer";
            break;
        case 1:
            answer = "There is no #1";
            break;
        case 99:
             answer = "Missed me by this much";
             break;
        case 7:
            answer = "Ate Nine";

    }

    return answer

}

/* Returning Boolean Values from Functions
   Remeber all comparison operators return a boolean operations, that is why
   example 1 may be written in the form of example 2. This means one can skip 
   all the If statement logic.
*/

// Example 1: With If else statements

function isLessIfVersion(a, b) {
    if (a < b) {
        return true;
    } else {
        return false;
    }
}

// Example 2: Without If else statements.

function isLess(a, b) {
    return a < b;
}

// Both will yeild the same result

console.log(isLessIfVersion (10, 15));
console.log(isLess (10, 15));

/* Returning Early Pattern from Functions
   
   We have gone through examples where we returned early from the functions.

*/

function abTest(a, b) {

    if (a < 0 || b < 0) {
        return undefined;  // a < 0 or b < 0
    }
    
    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2)); // round((sqrt(a) + sqrt(b))^2)
}

console.log(abTest(2,2)); // 8
console.log(abTest(2, -2)); // undefined

/* Counting Cards

   We are going to create a blackjack card counting function.
   In the case of the function we are designing - card counting 
   will operate in the follwoing way:

   When you see a low card the count goes up.
   When you see a high card the count goes down.
   When you see a middle value card the count stays the same.
   So then when the count is positive the player should bet high.
   So when the count is 0 or negative the player should bet low.

   Hence we are going to use a switch statemet to figure out what 
   card has been passed in and what to do about it.

   In the example the function is called cc and we pass in card  
   and depending on what the card is, we are going to increase or decrease or keep the 
   same  global count variable defined at the start of the code.

   We're going to return two things count the global variable and then a 
   local variable holdbet. The holdbet variable will tell the player which
   hold or bet.
   
   This code could have be done in a myriad of ways, for example, in the form 
   of If statements.

   Notice how cases 7, 8, and 9 were omitted - this is because it would have resulted
   in no change. 

   Note: The ternary operator could be used as it is a short way of writing an If-else 
   statement. It is called the conditional operator, and has the following syntax:

   (condition) ? expression-if-true : expression-if-false;

*/

var count = 0

function cc(card){
    switch(card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count ++;
            break;
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
            count --;
            break;
    }

    var holdbet = 'Hold'
    if (count > 0){
        holdbet = 'Bet'
    }
    return count + " " + holdbet;
}

cc(2); cc('K'); cc(10); cc(2);

console.log(cc("Q"));
console.log(cc("J"));
console.log(cc(5));

/* Build JavaScript Objects:

   Objects are similar to arrays, except that instead of using 
   indexes to access data, you use properties.

   Objects are going to be defined with these curly braces at the 
   begininning and the end. Porperties are everything before the colons
   and the values are the things after the colon. The values can be any 
   data type known in JavaScript.
*/

// Example - An example of an object

var ourDog = { 
    "name": "Bobo",
    "legs": 4,
    "tails": 2,
    "friends":[]
};

/* Accessing Object Properties with Dot Notataion

   There are two manin ways to access a property in an object. The method
   we are using now is dot notataion.

*/

// Example - Dot Notataion

var testObj = { 
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
};

var hatValue = testObj.hat;
var shirtValue = testObj.shirt;

/* Accessing Object Properties with Bracket Notataion

   You can use bracket notation anytime but it is required if the name 
   has a space in it.

*/

var testObject = {

    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
};

var entreeValue = testObject["an entree"];
var drinkValue = testObject["the drink"];

/* Accessing Object Properties with Variables

   Bracket Notation can also be used to look up object properties using
   variables.
*/

var testObj = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
};

var playerNumber = 16;
var player = testObj[playerNumber];

/* Updating Object Properties

   We can use dot notation to update object properties. See the example 
   below, we changed the name of the dog from Bobo to Mad Dog Bobo.
*/

// Example 

var ourDog = { 
    "name": "Bobo",
    "legs": 4,
    "tails": 2,
    "friends":[]
};

ourDog.name = "Mad Dog Bobo";

/* Add New Properties to an Object

   We can add new properties to an object using dot notation or bracket 
   notataion.
*/

// Example - adding a new property to ourDog

ourDog.ears = "pointy";

// so now the object ourDog has 5 properties.

/* Delete Properties from an Object
   
   To delete a property, simply use the delete keyword.

*/

var ourDog = { 
    "name": "Bobo",
    "legs": 4,
    "tails": 2,
    "Ears": "pointy",
    "friends":[]
};

delete ourDog.friends;

/* Using Objects for Lookups

   Objects can be thought of as a key value storage like a dictionary.
   You can use an object to lookup values.

   In the example we are looking at, we have a switch statement that 
   returns certain values. The switch statement can be replaced with an
   object and use the object for lookups instead of the switch statement.

   By creating a var lookup. Notice how it is a much shorter option to use
   than using a switch statement.

*/


// Example Switch case

function phoneticSwitch(val) {
    var result = "";

    switch(val) {
        case "alpha":
            result = "Adams";
            break;
        case "bravo":
            result = "Boston";
            break;
        case "Charlie":
            result = "Chicago";
            break;
        case "delta":
            result = "Denver";
            break;
        case "echo":
            result = "Easy";
            break;            
        case "foxtrot":
            result = "Frank";
            break;
    }
    return result;
}

// Example lookup case

function phoneticLookup(val) {
    var result = "";    

    var lookup = {
        "alpha":"Adams",
        "bravo":"Boston",
        "Charlie":"Chicago",
        "delta":"Denver",
        "echo":"Easy",
        "foxtrot":"Frank",    
    };
    result = lookup[val];

    return result;
}

console.log(phoneticSwitch("alpha"));
console.log(phoneticLookup("alpha"));

/* Testing Objects for Properties

   You can check if an object has a property with the hasown property
   method.

   When we pass in checkProp, we expect to recieve a boolean response.
   Since it can come back as either true or false if it has the property - 
   we are able to use an if statement. Forming the two cases shown below in 
   the example. 

*/

var myObj = {
    gift: "pony",
    pet: "kitten",
    bed: "sleigh"
};

function checkObj(checkProp) { 

    if (myObj.hasOwnProperty(checProp) ){
        return myObj[checkProp]; // true case
    } else {
        return "Not Found" // false case
    }
}

/* Manipulating Complex Objects

   A JavaScript object is a way to store flexible data. So you can store
   strings, numbers, arrays, and even other objects.

   So in this example we have an array called myMusic. Inside the array we
   have an objects. The example below, features two objects.

   And each object holds data and a property which is the key value format.
   This is very similar to JSON.

*/

var myMusic = [
    {
        "artist": "Billy Joel",
        "title": "Piano Man",
        "release_year": 1973,
        "formats": [
            "CD",
            "8T",
            "LP"
        ],
        "gold": true
    },

    // Another Record

    {         
    
        "artist": "Beau Carnes",
        "title": "Cereal Man",
        "release_year": 2003,
        "formats": [
            "YouTube video",
            ],
    }
]

/* Accessing Nested Objects
  
   In this example we are looking at an object with other objects nested inside of them.
   This will allow us to investigate the methods used to access sub-properties of an object.
   
   Method one, will involve the chained dot notation.

   Method two, will involve chained bracket notation.
  
*/

// Example

var myStorage = {
    "car": {
        "inside": {
            "glove box": "maps",
            "passenger seat": "crumbs"
        },
        "outside": {
            "trunk": "jack"
        }
    }
};

var gloveBoxContents = myStorage.car.inside["glove box"];

console.log(gloveBoxContents);

/* Accessing Nested Arrays
   
   Array bracket notation can be chnaged to access nested arrays.
   
   In the example we have an array and two objects. Each object has
   elements that are arrays.

*/

var myPlants = [
    { 
        type: "flowers",
        list:[
            "rose",
            "tulip",
            "dandelion"
        ]
    },
    {
        type: "trees",
        list:[
            "fir",
            "pine",
            "birch"
        ]   
    }
];


var secondTree = myPlants[1].list[1];

console.log(secondTree);

/* Record Collection

   This example focuses on an object, that has an ID, a property and a value.
   The aim is to create a function that can update the collection.
*/

var collection = {
    "2548": {
        "album": "Slippery When Wet",
        "artist": "Bon Jovi",
        "tracks": [
            "Let It Rock",
            "You Give Love a Bad Name"
        ]
    },
    "2568": {
        "album": "1999",
        "artist": "Prince",
        "tracks": [
            "1999",
            "Little Red Corvette"
        ]
    },
    "1245": {
        "artist": "Robert Palmer",
        "tracks": [ ]
    },
    "5439": {
        "album": "ABBA Gold",
    },
};

// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

function updateRecords(id, prop, value){
    if (value === ""){
        delete collection[id][prop];
    } else if (prop === "tracks") {
        collection[id][prop] = collection[id][prop] || [];
        collection[id][prop].push(value);
    } else {
        collection[id][prop] = value;
    }

    return collection;
}

console.log(updateRecords(5439, "artist", "ABBA"));

/* Iterate with While Loops

   Loops allow you to run the same code multiple times.
   The while Loop runs while a specified condition is true
   and stops once it's no longer true.

*/

var myArray = [];

var i = 0;
while(i < 5) {
    myArray.push(i);
    i++;
}

console.log(myArray);

/* Iterate with For Loops

   A for loop is the most common type of loop in JavaScript.
   
   for (initialisation; condition; final expression){

   };

   initialisation: is what most for loops start with.

   Condition: Until this condition is deemed false the loop will 
   keep on going, where it breaks out.

   Final expression: The thing we do after iteration.

*/ 

var ourArray = [];

for (var i = 0; i < 5; i++){
    ourArray.push(i);
}

var myArray = [];

for (i = 1; i < 6; i++) {
    myArray.push(i);
}

console.log(myArray);

/* Iterate Odd Numbers with a For Loop

   An example showing how we don't 
*/

var ourArray = [];

for (var i = 1; i < 10; i +=2) {
    ourArray.push(i);
}

console.log(ourArray);

/* Count Backwards with a For Loop

*/

var myArray = [];

for (var i=10; i > 0; i -=2) {
    myArray.push(i);
}

console.log(myArray);

/* Iterate Through an Array with a For Loop

   It is common in JavaScript to iterate through the contents of an
   array.

*/

var ourArr = [9, 10, 11, 12];
var ourTotal = 0;

for (var i = 0; i < ourArr.length; i++) {
    ourTotal += ourArr[i];
}

console.log(ourTotal);

/* Nesting for Loops

   If you have multidimensonal or nested array, you can use nested for loops
   to access all the array elements. 

   Since we already have an i within the scope mentioned in the first for loop
   we declare j...if we had to make another it would be h.

*/ 

// Exmaple 

function multiplyAll(arr) {
    var product = 1;

    for (var i=0; i < arr.length; i++){
        for (var j=0; j < arr[i].length; j++){
            product *= arr[i][j];
        }
    }

    return product;
}

// Basically 7!

var product = multiplyAll([[1,2], [3,4], [5,6,7]]);

console.log(product);

/* Iterate with Do...While Loops

   While loops first checks the condition before it runs any code within the loop.
   A Do while loop will always run at least one time before it will check the 
   condition.

*/

// Example 4

var myArray = [];
var i = 10;

while (i < 5) {
    myArray.push(i);
    i++;
}

console.log(i, myArray);

var myArray = [];
var i = 10;

do {
    myArray.pusj(i);
    i++;
} while (i < 5)

console.log(i, myArray);

/* Profile Lookup

   This is a coding challenge. You have an array of objects.
   Each object represents a contact.

*/

// Example

var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Cho"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    },
    {
        "firstName": "Luffy",
        "lastName": "Monkey",
        "number": "No Den Den Mushi",
        "likes": ["meat", "nakama", "One piece"]
    }
    
]
function lookUpProfile(name, prop) {

    for (var i = 0; i < contacts.length; i++){
        if(contacts[i].firstName === name){
            return contacts[i][prop] || "No such property";
        }
    }
    return "No such contact";
}

var data = lookUpProfile("Luffy", "likes");

console.log(data);

/* Generate Random Fractions

   There is a simple way to create a random decimal in JavaScript.

   Math.random() gives you a number x that satisfies the following 
   inequality 0 =< x < 1. 
*/

function randomFraction() {

    return Math.random();
}

console.log(randomFraction())

/* Generate Random Whole Number

   We need to adapt the inequality from before.

   (0 =< x < 1)*20 = 0 =< x < 20

*/

// Example

var randomNumberBewteen0and19 = Math.floor(Math.random() * 20);

function randomWholeNum() {

    return randomNumberBewteen0and19;

}

// or

function randomWholeNumber() {

    return Math.floor(Math.random() *30);
}

console.log(randomWholeNum());

console.log(randomWholeNumber());

/* Generate Random Whole Numbers within a Range

   (((9-1)+1)*(0 =< x < 1)) + 1 ---> 1 =< x < 10

   This is just the maths that works out the range of ourRandomRange.

   ((0 =< x < 1)*((m2 -m1) + 1)) + m1 ---> m1 =< x < (m2 +1)

   This means that the number will always be between m1 and m2.

*/


function ourRandomRange(ourMin, ourMax) {

    return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;
}

ourRandomRange(1,9);

/* Use the parseInt Function

   It takes a string and returns an integer. This will be useful for calculations
   where we want to perform calculations.

   If the string cannot be converted into an integer in returns in NaN
   for Not a Number.

*/

// Example

function convertToInteger(str) {
    return parseInt(str);
}

// This will will parse into an integer....it can also be contenated.
console.log(convertToInteger("1000111" + "55")); 

/* Use the parseInt Function with a Radix

   The parseInt function can also be used with a radix. 
   The radix specifies the base of the number in the string.

   base 2 is binary. 
   base 10 is what we normally use in day to day life it is also 
   the default option.
   
*/

function convertToInteger(str) {
    return parseInt(str, 2)
}

console.log(convertToInteger("10011"));

/* Use the Conditonal (Ternary) Operator
   
   It's like a one line if else statement.

   condition ? statement-if-true : statement-if-false;

*/

// Normal If else statement
function checkEqual(a, b) {
    if (a === b) {
        return true;
    } 
    else {
        return false;
    }
}

// Ternary Operator version

function checkEqual(a, b) {

    return a === b ? true : false;

}

/* Use Multiple Conditonal (Ternary) Operators

   One of the advantages of Conditional/Ternary operators is that we 
   can nest them within each other which gives them even more power.

*/

   function checkSign(num) {
    return num > 0 ? "Posistive" : num < 0 ? "Negaeive" : "Zero";
   }

   console.log(checkSign(0));

/* Differences Between the var and let Keywords

    Starting with ES6 in 2015 we could declare variables with let
    and const opposed to only using var.

    let does let you declare a variable twice.

    You'll get a error saying that there is duplication declaraition in
    the instance that you try and use let to declare a variable more than
    once. This is a good thing, because in general you don't want to declare
    a variable two times in the same scope. So one would you use this method 
    as it gives you an error that lets you know that you have done something
    wrong.

    "use strict" enables strict mode which catches common coding mistakes and 
    unsafe actions. This is probaly why "use strict" would be used at the top 
    of a full JavaScript file or maaybe just in a fucntion to catch coding 
    mistakes. Such as if you create a variable and don't declare it with var,
    let, or const.

*/

/* Compare Scopes of the var and let keywords

   Another major difference between the var and let keywords is that when you
   declare a variable with var, it is declared globally or locallly if declared
   inside a function. 

   However, let - the scope of let is limited to the block statement or expression
   that it was declared in.

   See example 1, notice how the output is:
   
   Block scope i is: block scope

   Function scope i is: block scope

   Meanwhile example 2 will be:

   Block scope i is: block scope

   Function scope i is: function scope

   Note: A block is just anything inside these squiggly braces here.

   So in our examples we have two blocks, so when we use let to declare
   our variables, it accounts for the outer block which is for the function
   and the inner block of the If statement. 

   People use let to declare variables because it allows one to make sure 
   the variable is only defined in the area they want it to be defined in.
   

*/

// Example 1
function checkScope() {
    "use strict";
    var i = "function scope";
    if (true) {
        i = "block scope";
        console.log("Block scope i is:", i);
    }
    console.log("Function scope i is:", i);
    return i;
}

checkScope();

// Example 2 

function checkScope() {
    "use strict";
    let i = "function scope";
    if (true) {
        let i = "block scope";

        console.log("Block scope i is:", i);
    }
    console.log("Function scope i is:", i);
    return i;
}

checkScope();

/* Declare a Read-Only Variable with the const Keyword

   const is another way to declare a variable. It has all the features
   of let but it's also read-only. You cannot reassign a const.

   This is why in example one the output was:

   OnePiece is amazing!

   Meanwhile, in example 2 the code had to be modified otherwise we would
   have gotten an error saying ("sentence" is read only).

   For the most part, one should mainly use const and let. However, there 
   are instances where we use var.

*/

// Example 1 

function printManyTimes(str) {
    "use strict";

    var sentence = str + " is cool!";

    sentence = str + " is amazing!";

    for(var i = 0; i < str.length; i+=2) {
        console.log(sentence);
    }
}

printManyTimes("OnePiece");

// Example 2

function printManyTimes(str) {
    "use strict";

    const SENTENCE = str + " is cool!";

    for(let i = 0; i < str.length; i+=2) {
        console.log(sentence);
    }
}

printManyTimes("OnePiece");

/* Mutate an Array Declared with const

   While you cannot reassign a variable that was declared with const,
   however, you can mutate an array.

*/ 

const s = [5, 7, 2];

function editInPlace() {
    "use strict";

    // s = [2, 5, 7]; This can't work because I can't reassign the variable.
    // However using Bracket notation I can mutate the array.
    s[0] = 2;
    s[1] = 6;
    s[2] = 7;

}
editInPlace();

console.log(s);

/* Prevent Object Mutation

   In the previous example, we saw how a const declaration alone doesn't really
   proctect your data from mutation.

   If you have an object or an array, you can still mutate it even it's declared with
   const.

   There is something called object.freeze that will prevent data mutation.

*/

function freezeObj() {
    "use strict";
    const MATH_CONSTANTS ={
        PI: 3.14
    };

    Object.freeze(MATH_CONSTANTS);
    try {
        MATH_CONSTANTS.PI =99;
    } catch( ex ) {
        console.log(ex);
    }
    return MATH_CONSTANTS.PI;

}

const PI =freezeObj();

/* {stack: 'TypeError: Cannot assign to read only 
propert…s/JavaScript_Practice/Basic_info.html:1159:11', 
message: 'Cannot assign to read only property 'PI' of object 
'#<Object>''}
*/

/* Use Arrow Functions to write concise Anoymous Functions
 
   In the example below, we have a function that doesn't have name,
   thus earning the title of being an anoymous function. Even though 
   we have assigned it to the variable magic; there's no word right 
   before the function keyword to assign the name to the function.
   Whenever you have an anonymous function you can convert it into an
   arrow function. This makes it a little quicker to write. 

   That's why in the second example below, we take out the word function;
   and instead type/write an arrow after the ().

   We can shorten it even more. since we are just returning one value 
   we can remove the return keyword and the curly braces. The change from
   var to const is just a little touch, that one can add to it.

*/

// Example 1
var magic = function() {
    return new Date();
}

// Example 2

const magic = () => Date();

/* Write Arrow Functions with Parameters
   
   Just like in normal function, you can pass arguments to arrow functions.

   concat() is a method in JavaScript that is used to combine two or more arrays.
    The method does not change the existing arrays but returns a new array, which 
    contains all the elements of the original arrays. The concat() method can take 
    one or more arrays as its parameters, and it returns a new array that contains 
    the elements of all the arrays.
*/

// Example 1 - Normal function 

var myConcat = function(arr1, arr2) {
    return arr1.concat(arr2);
};

console.log(myConcat([1, 2], [3, 4, 5]));


// example 2 - Arrow function
const myConcat = (arr1, arr2) => arr1.concat(arr2);

/* Write Higher Order Arrow Functions
   
   Arrow functions work really well with higher order functions such as
   map, filter, and reduce. All we need to know about these higher order
   functions for now is that they take functions as arguments for processing
   collections of data.

   Whenever one function takes another function as an argument, that is suitable
   time for an arrow function.

   In the previous example we saw that when we had two arguments we put parenthesis
   around them, however if we have a single argument, you don't need to follow that
   format. Look at the example below if you are confused.
   
   Note: Number.isInteger() is a built-in function in JavaScript 
   that checks if a value is an integer. It returns true if the 
   value is an integer and false if not.

*/

// Example 1

const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];

const squareList = (arr) => {
    const squaredIntegers = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x);
    return squaredIntegers;
};

const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);

/* Write Higher Order Arrow Functions

   In order to create more flexible functions you can use default parameters.
   The defualt parameter kicks in when the argument is not specified or is 
   undefined.

   In the example covered below, we have set number and value as our parameters.
   In the case that we have no value arg passed in, we take the defualt value of
   1. 

*/

const increment = (function() {
    return function increment(number, value = 1){
        return number + value;
    };
})();

console.log(increment(5, 2));
console.log(increment(5));

/* Use the Rest Operator with Function Parameters

   The rest operator allows you to create a function that takes a variable number 
   of arguments. The rest operator is three dots.

   The function below is taking three arguments x, y, and z and it's summing them.
   So it's converting these x, y, and z into an array called args; and then reducing
   them.

   So the problem here is that this is only limited to 3 numbers as the array args.
   The option with the rest operator, means we can mae an array that we can pass 
   everything into a single array called args. Allow us to have any number of arguments
   now as the array is exapansive.

*/

// Example without

const sum1 = (function () {
    return function sum1 (x, y, z) {
        const args = [x, y, z]
        return args.reduce((a, b) => a + b, 0);
    };
}) ();

console.log(sum1(1, 2, 3));

// Example with the rest operator
const sum2 = (function () {
    return function sum2 (...args) {
        return args.reduce((a, b) => a + b, 0);
    };
}) ();

console.log(sum2(1, 2, 3, 4, 5));

/* Use the Spread Operator to Evaluate Arrays In-Place

   The spread operator looks just like the rest operator.
   But it expands an already existing array or spreads out an array.

   Below, we have two examples, that illustrate the effect
   of using the spread operator. 

   One should understand the example without the spread operator
   equates the two different arrays. Meanwhile in the second example
   we see that the spread operator is used to transfer all the elements
   of the arr1 into arr2, making it a direct copy.

   Note: You can only use it in an argument to a function or in an array
   literal.

   Array literal: An array literal is a way of creating a new array in 
   JavaScript by specifying its elements in square brackets, separated by 
   commas.

*/

// Example 1
const arr1 = ['Luffy', 'Zoro', 'Nami', 'Usopp', 'Sanji', 'Chopper', 'Robin', 'Franky', 'Brook'];
let arr2;
(function(){
    arr2 = arr1;
    arr1[0] = 'potato'
})();

console.log(arr2);

// Example 2
const arr3 = ['Luffy', 'Zoro', 'Nami', 'Usopp', 'Sanji', 'Chopper', 'Robin', 'Franky', 'Brook'];
let arr4;
(function(){
    arr4 = [...arr3];
    arr3[0] = 'One Piece'
})();

console.log(arr4);

/* Use Destructuring Assignment to Assign Variables from Objects

   Destrucuring Assignments - this is a special syntax for neatly 
   assigning values taken directly from an object to a variable.
*/

// Example without destrucuring
var voxel = {x: 3.6, y: 7.4, z: 6.54 };

var x = voxel.x;
var y = voxel.y;
var z = voxel.z;

/* The code below can be read like this:

   Get the field of x and copy into the value a.
   Get the field of y and copy into the value b.
   Get the field of z and copy into the value c.
*/

// Example of destructuring
const { x : a, y : b, z : c} = voxel;

// Another example of destructuring 
const AVG_TEMPERATURES = { 
    today: 77.5,
    tomorrow: 79
};

function getTempOftmrw(avgTemperatures){
    "use strict"

    // Get the field of tomorrow and assign it to the tempOfTomorrow variable.

    const{ tomorrow : tempOfTomorrow} = avgTemperatures
    return tempOfTomorrow;
}

console.log(getTempOftmrw(AVG_TEMPERATURES));

/* Destructuring Assignment with Nested Objects

   Destructuring assignment can also be used to assign variables from nested objects.

   In the example below we destructured two times. The intial curly brackets gets 
   tomorrow, then the nested curly bracket gets the max option.

*/

const Local_Forecast = {
    today: {min: 72, max: 83},
    tomorrow: { min: 73.3, max: 84.6}
};

function getMaxOfTmrw(forecast) {
    "use strict";

    const { tomorrow : { max: maxOfTomorrow }} = forecast;

    return maxOfTomorrow;
}

console.log(getMaxOfTmrw(Local_Forecast));

/* Use Destructuring Assignement to assign variables from arrays

   In the example below we have an array where we are assigning 
   z and x to the first two numbers of the array, 1, and 2.

   The difference between destructuring in an array from an object
   is that you can't specify which element from the array to go into
   the variable, it just goes in order.

   You can use the destructuring of arrays to switch the places of 
   variables.

*/
// Example 1

const [z, x, , y] = [1, 2, 3, 4, 5, 6];
console.log(z, x, y);

// Example 2
var a = 8, b = 6;

(() => {
    "use strict";

    [a, b] = [b, a];

}) ();

console.log(a);
console.log(b);

/* Use Destructuring Assignment with the Rest Operator

   The method of destructuring assignment in conjuction with the rest operator
   to reassign array elements.
*/

const source =  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function removeFirstTwo(list) {

    const [ , , ...arr] = list;
    
    return arr;
}

var arr = removeFirstTwo(source);
console.log(arr);
console.log(source);

/* Use Destructuring Assignment to Pass an Object as a Function's Parameters

   You can use the destructuring assignment to pass an object as a function's 
   parameter.

   In example 1 below we have this half function and it gets the stats arguments.
   The variable stats is an object, so with how we have set up example 1, it means
   we have to pass through all the stat variables before it works.

   In example 2 we use destructuring to make this process more effiecent. So, now 
   when the stats gets passed in it's destructured into the max and min variables.

   So the max and min from the function gets passed in. Although the two examples 
   give us the same results, the second example only passes in what we want. This 
   aspect of destructuring is why we commonly use this method in API calls, in the 
   case of getting information from an Ajax request or an API request, it will often
   have a lot more information than what you need. This is when you use destructuring 
   to get it down to what we actually want to work with.

*/

// Example 1
var stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
};

var half = (function () {

    return function half(stats) {
        return (stats.max + stats.min) / 2.0;
    };

}) ();

console.log(stats);
console.log(half(stats));

// Example 2
var stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
};

var half = (function () {

    return function half({max, min}) {
        return (max + min) / 2.0;
    };

}) ();

console.log(stats);
console.log(half(stats));

/* Create Strings using Template Literals

   Template literals are a special type of string that makes creating complex strings easier.
   You make them with using a backticks instead of quotation marks.

   Advantages:

   -Can make multiline strings
   -You can add single or double quotation marks within the string, without the need to escape them.
   -You can put variables right in the string.
*/

const person = {
    name: "Monkey D. Luffy",
    age: 19
};

// Template literal with multi-line and string interpolation
const greeting = `Hello, my name is ${person.name}!
I am ${person.age} years old.`;

console.log(greeting);

/**Coding Challenge
 * We have a function called makeList and we want to create a list based on the
 * array that's passed in. So when we call makeList, we pass result.failure.
 * 
 * makeList(result.failure) should return:
 * 
 * [ `<li class="text-warning">no-var</li>`,
 *   `<li class="text-warning">var-on-top</li>`,
 *   `<li class="text-warning">linebreak</li>` ]
 * 
 * Each element in the array is a template literal that has some HTML in it.
 * 
 * The `resultDisplayArray` was initially `null`, so when we wanted to push 
 * elements into the `resultDisplayArray` using the push method, we would encounter
 * an error. In order to fix this I dedcided to intialise `resultDisplayArray` as an 
 * empty array `[]` instead of `null`.
 * 
 */

const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["id-blacklist", "no-dup-keys"]
};

function makeList(arr) {
    const resultDisplayArray = [];
    for (let i = 0; i < arr.length; i++) {
        resultDisplayArray.push(`<li class="text-warning">${arr[i]}</li>`)
    }

    return resultDisplayArray;
}

const resultDisplayArray = makeList(result.failure);
console.log(resultDisplayArray);

/** Write Concise Object Literal Declarations using Simple Fields
 * 
 * ES6 added some nice support for easily defining object literals.
 * 
 * In example 1 the `createPerson` function takes in `name`, `age`, and
 * `gender` as parameters and returns an object literal. The properties of
 * the object (`name`, `age`, `gender`) are assigned values from the function
 * parameters. 
 * 
 * ES6 you can use the consise syntax to simplify the code. SO in example 2
 * the `createPerson` function uses arrow function syntax and immediately returns
 * object literal. The properties of the object (`name`, `age`, `gender`) are
 * assigned values from the function parameters using the concise syntax. This
 * syntax allows you to directly use the parameter names as property names without 
 * repeating them.
 */

// Example 1
var createPerson = (name, age, gender) => {

    return {
        name: name,
        age: age,
        gender: gender
    };
    };
    
    console.log(createPerson("Sanji Vinsmoke", 21, "male"));
    
    // Example 2
    var createPerson = (name, age, gender) => ({name, age, gender});
    
    console.log(createPerson("Rikuo Nura", 13, "male"));

/** Write Concise Declarative Functions 
 * An object can contain a function.
 * 
 * [Note: I wanted to introduce the term method, this refes to a function that is associated with
 * an object or a class. Methods are used to define the behaviour or actions that an object can 
 * perform. 
 * 
 * In object-oriented programming (OOP), objects encapsulate data and behaviour. The data is
 * represented by properties or attributes, while the behaviour is defined by methods. Methods are
 * functions that operate on the object's data and can modify it, retrive information from it, or
 * perform specific actions.]
 * 
 * In example 1, the `bicycle` object has a property `gear` with an intitial value of 2,
 * and a method `setGear` defined as a regular function. The `setGear` function takes in a 
 * `newGear` parameter and updates the `gear` property of the `bicycle` object with the 
 * provided value. The method is invoked using `bicylce.setGear(3)` and then the `gear` 
 * property is logged to the console.
 * 
 * In example 2, the `setGear` function is defined using the concise syntax available in ES6.
 * Instead of using the `function` keyword, the function is declared directly within the object
 * literal using the property name and parameter list.
 * 
 * Note: An object literal is a way to define an object in JavaScript using a concise syntax.
 * It allows you to create an object with properties and their corresponding values directly within
 * the curly braces `{}` without the need for a constructor or a class.
 */

// Example 1
var bicycle = {
    gear: 2,
    setGear: function(newGear) {
        "use strict";
        this.gear = newGear;
    }
};

bicycle.setGear(3);
console.log(bicycle.gear);


// Example 2

var bicycle = {
    gear: 2,
    setGear (newGear) {
        "use strict";
        this.gear = newGear;
    }
};

bicycle.setGear(3);
console.log(bicycle.gear);

/**Use class Syntax to Define a COnstructor Function
 * 
 * ES6 provides a syntax to create object s using the class keyword.
 * 
 * Example 1 is the old way of creating an object where we instantiate an object 
 * using the `new` keyword. We're instantiating the SpaceShuttle object.
 * The constructor function takes a parameter `targetPlanet` and assigns it to 
 * the `targetPlanet` property of the object being created. The `new` keyword is
 * used to instantiate an instance of the `SpaceShuttle` object, with `Jupiter` being
 * passed as the `targetPlanet` argument. The resulting object is
 * assinged to the variable `zeus`, and accessing `zeus.targetPlanet` will log 
 * `'Jupiter'` to the console. 
 * 
 * In example 2 the class syntax replaces the constructor function creation. The class
 * has a constructor method that takes a `Fruit` parameter and assigns it to the 
 * `Fruit` property of the object. To create an instance of the `devilFruit` 
 * class, the `new` keyword is used with the class name, and the `Fruit` argument 
 * is passed.
 * 
 * In my opioion, the class syntax is more intuitive way of defining and creating objects 
 * when compared to the traditional way.
 */

// Example 1

var SpaceShuttle = function(targetPlanet) {
    this.targetPlanet = targetPlanet;
}

var zeus = new SpaceShuttle('Jupiter');

console.log(zeus.targetPlanet);

// Example 2

class devilFruits {
    constructor(Fruit){
        this.Fruit = Fruit;
    }
}

var nika = new devilFruits('Gum Gum no Mi');

console.log(nika.Fruit);

/** Example 3
 * 
 */

function onePiece() {
    class DevilFruits {
        constructor(name){
            this.name = name;
        }
    }
    return DevilFruits;
}

const DevilFruits = onePiece();
const gumgumnomi = new DevilFruits(`gum gum no mi`);
console.log(gumgumnomi.name);

/**Use getters and setters to Control Access to an Object
 * 
 * With a class object you often want to obtain values from the object and set
 * a value of a property within an object.
 * 
 * These are often called getters and setters.
 * 
 * getter functions are meant to simply return  or get the value of an object's 
 * private variable to the user without the user directly accessing the private 
 * variable. 
 * 
 * The class `devilFruitHolder` has a private property `._holder`, which is set during
 * the object construction using the `constructor` method.
 * 
 * The getter method `get devilFruitUser()` allows you to retrieve the value of the 
 * `_holder` property without directly accessing it. It simply returns the value of
 * `this._holder` when you access `devilFruitUser`.
 * 
 * The setter method `set holder(updatedHolder)` allows you to update the value of the 
 * `_holder` property. When you assign a value to `holder`, it invokes the setter method
 * with the new value as the argument, and the setter updates the value of `this._holder` 
 * accordingly.
 * 
 * Getters and setters allow you to encapsulate the internal state of an object and provide 
 * controlled access to its properties. They enable you to add additional logic or perform 
 * validation when retrieving or modifying property values, giving you more control over the 
 * object's behaviour. They also provide you with a layer of abstraction.
 *
 * Note: Abstraction is a fundamental concept in programming that focuses on hiding unnecessary
 * implentation details and exposing only the essential information or functionalities to the user.
 * It allows you to create simplified models or representations of complex systems, making it easier
 * to understand and work with those systems.
 */

// Example 

class devilFruitHolder {
    constructor(holder) {
        this._holder = holder;
    }

    // getter
    get devilFruitUser (){
        return this._holder;
    }
    // setter
    set holder(updatedHolder){
        this._holder = updatedHolder;
    }
}

const fruit = new devilFruitHolder('Monkey D. Luffy');
console.log(fruit.devilFruitUser); // Output: 'Monkey D. Luffy'

fruit.holder = 'Sabo';
console.log(fruit.devilFruitUser); // Output: 'Sabo'

/** Coding Challenge
 * 
 * Challenge: Make a getter and setter for the Thermostat class.
 * The class should be able to accept Fahrenheit temperature, but also have
 * a getter or setter in the class to obtain the temperature in Celcius.
 * 
 * The `makeClass()` function defines the `Thermostat` class and its constructor,
 * getter, and setter methods. The constructor takes a temperature in Fahrenheit 
 * and converts it to Celsius, storing it in the `_temp` property.
 * 
 * - The `makeClass()` function defines the `Thermostat` class and returns it.
 * 
 * - The `Thermostat` class has a constructor that accepts a `temp` parameter 
 *  (temperature in Fahrenheit). It converts the Fahrenheit temperature to Celsius 
 *  using the formula `5/9 * (temp - 32)` and assigns the result to the `_temp` property.
 * 
 * - The class has a getter method `get temperature()` that returns the Celsius tmeperature
 *   (`this._temp`).
 * 
 * - The class has a setter method  `set temperature(updatedTemp)` that allows you to update
 *   the Celsius temperature by assigning a new value to the `this._temp`.
 * 
 * - After calling `makeClass()`, the returned `Thermostat` class is assigned to the `Thermostat`
 *   class is assigned to the `Thermostat` variable.
 * 
 * - An instance of `Thermostat` named `thermos` is created with an initial Farhrenheit temperature
 *   of 76.
 * 
 * - The current temperature in celsius (`thermos.temperature`) is obtained and stored in the `temp`
 *   variable.
 * 
 * - The Celsius temperature is updated to 26 using the setter method (`thermos.temperature = 26`).
 * 
 * - The updated Celsius temperature is obtained again and stored in the `temp` variable.  
 * 
 * - The `temp` value is logged to the console, which represents the Celsius temperature.
 * 
 * Note: Notice how when we use the getter and setter, we do not have to put a parenthesis
 * despite it functioning like a function. Instead it mimics a variable or a property name,
 * so that means the getters and setters operate similarly to properties.
 * 
 */

function makeClass () {
    class Thermostat {
        constructor(temp) {
            this._temp = 5/9 * (temp - 32);
        }
        get temperature() {
            return this._temp;
        }
        set temperature(updatedTemp){
            this._temp = updatedTemp;
        }
    }
    return Thermostat;
}

const Thermostat = makeClass();
const thermos = new Thermostat(76);
let temp = thermos.temperature;
thermos.temperature = 26
temp = thermos.temperature;

console.log(temp);

/** Understand the Difference Between import and require
 * 
 * In the past people would use the require function to import functions and code from other files.
 * But now we have import and export. You can export code in one file and then import it in another file.
 * It also allows you to only import certain functions from a file or certain variables.
 * 
 * Note: a new file called string_function was made.
 */

import { capitaliseString } from "./string_function"

const cap = capitaliseString('hello!');

console.log(cap);