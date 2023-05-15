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

