// Declare a RegExp object variable named 're'
//      * It must match ALL occurrences of numbers in a string.
//      */

let re = /\d+/g;

// 🔍 Explanation
// \d

// Matches any digit (0–9).

// \d+

// Matches one or more digits (so it captures multi-digit numbers too).

// Examples matched:

// 1
// 42
// 100
// 9999

// g flag

// Means global → find all numbers in the string, not just the first one.

// 📌 Example usage
// const str = "My house number is 24 and I have 2 cats."
// str.match(/\d+/g);

// Output:

// ["24", "2"]

// ✅ Final answer for the challenge
// function regexVar() {
//     let re = /\d+/g;
//     return re;
// }
