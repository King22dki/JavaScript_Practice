/**
 * 
 * @param {*} str 
 * @returns 
 * 
 * This is the export statement mentioned in the other section and then it's
 * exporting the function.
 * 
 * It is actually a variable called capitaliseString, that's set to equal a function.
 * Using an arrow function, to pass in a string and then return str.toUpperCase().
 * toUpperCase is just a string function that makes every letter uppercase.
 * 
 * So we can Import this into our other file.
 */
export const capitaliseString = str => str.toUpperCase();