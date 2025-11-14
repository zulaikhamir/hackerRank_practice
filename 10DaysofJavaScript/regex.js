// Objective

// In this challenge, we use a Regular Expression to evaluate a string. Check out the attached tutorial for more details.

// Task

// Complete the function in the editor below by returning a RegExp object, , that matches any string  that begins and ends with the same vowel. Recall that the English vowels are a, e, i, o, and u.

// Constraints

// The length of string  is  .
// String  consists of lowercase letters only (i.e., [a-z]).
// Output Format

// The function must return a RegExp object that matches any string  beginning with and ending in the same vowel.
function regexVar() {
  /*
   * Declare a RegExp object variable named 're'
   * It must match a string that starts and ends with the same vowel (i.e., {a, e, i, o, u})
   */
  const re = /^([aeiou]).*\1$/;

  /*
   * Do not remove the return statement
   */
  return re;
}
// Regex:
// /^([aeiou]).*\1$/

// 1. ^ — the starting gate

// Signals the engine to match from the very beginning of the string.

// 2. ([aeiou]) — capturing the opening vowel

// This picks one vowel from a e i o u and puts it into a capture group.
// Think of it as storing the first note of a melody.

// 3. .* — everything in between

// Matches any number of characters (including zero).
// This is the journey between the first and last vowel.

// 4. \1 — the return to the opening note

// \1 means:
// “Match the exact same character captured in group 1.”
// So if the string started with a, the ending must also be a.
// If it started with o, it must end with o.
// A perfect loop — a vowel echoing itself.

// 5. $ — the finish line

// Ensures the match reaches the very end of the string.

// In simple terms:

// The regex enforces:

// Must start with a vowel

// Must end with the same vowel

// Can have anything in between

// No deviations allowed
