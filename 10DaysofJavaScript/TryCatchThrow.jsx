function isPositive(a) {
  try {
    // If the number is positive, throw 'YES'
    // (the thrown value immediately exits the try block)
    if (a > 0) throw "YES";

    // If the number equals zero, throw a custom message 'Zero Error'
    if (a === 0) throw "Zero Error";

    // If the number is negative, throw a custom message 'Negative Error'
    if (a < 0) throw "Negative Error";
  } catch (error) {
    // The variable inside catch() receives the value we threw above.
    // Here, 'error' is just a name — you can call it anything you like.
    // We use lowercase 'error' to avoid confusion with the built-in 'Error' class in JavaScript.
    // 'Error' (with a capital E) is a reserved constructor for actual Error objects like new Error('message').
    // Using 'Error' as a variable name would shadow the built-in class and break good practice.

    // Return the message so that the function's caller (e.g. HackerRank) can print it.
    return error;
  }
}
