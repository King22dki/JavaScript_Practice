/* Random multiple within the range of:

   Remember that Math.random has a range of 0 =< x < 1.
   so when we multiply it by 101 we get for c and d:
   0 =< c < 101 and 0 =< c < 101

   so the maximum number for c and d cannot exceed 99 after it has been floored.
   so we have:
   (c-1)*(d-1) = a*b
   so 0 =< a*b < 1000000

*/

function randomMultiple (a, b){
    const c = Math.floor(Math.random()*1001);
    const d = Math.floor(Math.random()*1001);

    var a = Math.floor(Math.random()*c);
    var b = Math.floor(Math.random()*d);

    return a*b;
}

console.log(randomMultiple());

/* I wanted to experimetnt with generating prime numbers so I looked 
   up some functions:

   P(n) = (n*n) + n + 41

*/

function eulerPrimeNumbers(n) {

    if (n < 41) {
        return (n**2) + n + 41;
    } else {
        return "This function is not valid for the input given.";
    }
}

console.log(eulerPrimeNumbers(40));

/* Experimation of using function to create a quadratic formula solver
   I had to declare three different variables.
*/

function quadraticEqSolver(a,b,c) {

    var discriminant = ((b**2)-(4*a*c))

    if (discriminant < 0) {
        return "There are no real solutions"
    }

    var x1 = ((-b + Math.sqrt(discriminant))/(2 * a));

    var x2 = ((-b - Math.sqrt(discriminant))/(2 * a));

    var result = "";

    result += "x1" + " " + "=" + " " + x1 + " and " + "x2" + " " + "=" + " " + x2
    return result
}

console.log(quadraticEqSolver(1, 9, 18));

// This is the return I recieved from the debug console (x1 = -3 and x2 = -6).

/** Discriminant Rule
 * 
 */

function discriminantQuadraticts(a,b,c){
    var d = b**2 - (4*a*c);

    if (d > 0) {
        return "two real solutions";
    } else if (d === 0) {
        return "one repeated root";
    } else if (d < 0) {
        return "complex roots";
    }
}

console.log(discriminantQuadraticts(1,6,3));