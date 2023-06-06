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
 * */


function duplicatesCounter(args){
    const array = args.toString().split("") // Forms an array
    let counts = [];
    let duplicatesCount = 0;

    for (let i = 0; i < array.length; i++){
        let element = array[i]
        counts[element] = counts[element] ? counts[element] + 1: 1;
        
        if (counts[element] > 1){
            duplicatesCount++;
    
        }
    }

    return duplicatesCount;
}
