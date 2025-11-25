function reverseString(s) {
  try {
    // Try to split the string into characters, reverse it, and join it back
    s = s.split("").reverse().join("");

    // If successful, print the reversed string
    console.log(s);
    return; // Stop execution here since everything worked fine
  } catch (error) {
    // If an error happens (for example, s is not a string),
    // print only the error message instead of crashing the program
    console.log(error.message);
  }

  // If no error but reversal didn't happen (very rare), print original input
  console.log(s);
}
