/** Count the number of Duplicates
 * 
 * Challenge: Write a function that will return the count of distinct
 * case-insenstive alphabetic characters and numeric digits that occur 
 * more than once in the input string. The input string is assumed to 
 * contain only alphabets (both uppercase and lowercae) and numeric digits.
 * 
 * Example:
 * 
 * "abcde" --> 0 # no characters repeats more than once.
 * "aabbcde" -> 2 # 'a' and 'b'
 * "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
 * "indivisibility" -> 1 # 'i' occurs six times
 * "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
 * "aA11" -> 2 # 'a' and '1'
 * "ABBA" -> 2 # 'A' and 'B' each occur twice
 * 
 * In this case, using an object (`{}`) is more suitable than an array (`[]`)
 * because we need to track the counts of each element in the input string.
 * 
 * Key-value Pairs: Objects in JavaScript are designed to store data as key-value
 * pairs, where each key is unique. In this case, we are using the characters in the
 * string as keys and their corresponding counts as values.
 * 
 * Efficient Lookup: Objects provide effcient lookup time complexity for accessing values
 * based on their keys. It allows you to directly access the count of an element using its keys.
 * It allows one to directly access the count of an element using its key, such as `counts[element]`.
 * Note the time complexity using objects is O(1) meanwhile the array has a time complextity of O(n).
 * This is because the loop iterates over the array elements, by visiting each element once. Thus the 
 * total time comlexity is approximately O(n).
 * 
 * If I want to imporve this code I should focus on the array aspect of the code.
 * 
 * */


function duplicatesCounter(args) {
    // Convert input to string and split into an array
    const array = args.toString().split(""); 
    // Object to store element counts
    let counts = {};
    // Counter for duplicate elements
    let duplicatesCount = 0;
  
    for (let i = 0; i < array.length; i++) {
      // Convert element to lowercase  
      let element = array[i].toLowerCase();
      //Increment element count or set it to 1 if not exists 
      counts[element] = counts[element] ? counts[element] + 1 : 1;
      // Check if element count is 2 (duplicate)
      if (counts[element] === 2) {
        // Increment duplicate count
        duplicatesCount++;
      }
    }
    // Return the total count of duplicates 
    return duplicatesCount;
  }
  /** 
   * The `require` function is commonly used in Node.js to import modules.
   * However, it is not avaiable in all JavaScript enviroments, such as the 
   * browser or certain online code editors. If you're running this code in a 
   * browser enviroment or an online code editor, you won't be able to use 
   * `require` to import the `chai` library for testing.
   * 
   */

  // Run the tests in a browser console
  console.log(duplicatesCounter("")); // 0
  console.log(duplicatesCounter("abcde")); // 0
  console.log(duplicatesCounter("aabbcde")); // 2
  console.log(duplicatesCounter("aabBcde")); // 2
  console.log(duplicatesCounter("Indivisibility")); // 1
  console.log(duplicatesCounter("Indivisibilities")); // 2
  
  
  const { assert } = require('chai');
  
  describe("Tests", () => {
    it("test", () => {
      assert.strictEqual(duplicatesCounter(""), 0);
      assert.strictEqual(duplicatesCounter("abcde"), 0);
      assert.strictEqual(duplicatesCounter("aabbcde"), 2);
      assert.strictEqual(duplicatesCounter("aabBcde"), 2, "should ignore case");
      assert.strictEqual(duplicatesCounter("Indivisibility"), 1);
      assert.strictEqual(duplicatesCounter("Indivisibilities"), 2, "characters may not be adjacent");
    });
  });
  