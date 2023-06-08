/** A Narcissitic Number (Or Armstrong Number)
 * 
 * A positive number which is the sum of it's own digits,
 * rasied to the power of the number of digits in a given 
 * base. In the first example we will look at decimal (base 10).
 * 
 * For example, take 153(3 digits), which is narcissistic:
 * 
 * 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153 
 * 
 * Now let's look at a number that isn't narcissistic,
 * 1652 (4 digits):
 * 
 * 1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938
 * 
 * The Challenge:
 * 
 * Your code must return true or false (not 'true' and 'false')
 * depending upon whether the given number is a Narcissistic number
 * in base 10.
 * 
 * */

function narcissisticIdentifier(number) {
    const digits = number.toString().split('').map(Number);
    // digits = [array of digits]
    const digitCount = number.toString().length;
    // digitCount = number of digits
    let sum = 0;

    for (let i = 0; i < digitCount; i++){
        sum += digits[i] ** digitCount;
    }

    if (sum === number){
        return "The number is Narcissitic in the base 10";
    } else {
        return "The number is not Narcissitic";
    }
}

console.log(narcissisticIdentifier(153));
// Output: The number is Narcissitic in the base 10.
console.log(narcissisticIdentifier(1652));
// Output: The number is not Narcissitic.

// Example that gives back a boolean

function narcissisticIdentifier(number) {
    const digits = number.toString().split('').map(Number);
    // digits = [array of digits]
    const digitCount = number.toString().length;
    // digitCount = number of digits
    let sum = 0;

    for (let i = 0; i < digitCount; i++){
        sum += digits[i] ** digitCount;
    }

    return sum === number;
}
console.log(narcissisticIdentifier(153));
console.log(narcissisticIdentifier(1652));
