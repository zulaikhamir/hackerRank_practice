// Given a date string,dateString , in the format MM/DD/YYYY, find and return the day name for that date. Each day name must be one of the following strings: Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, or Saturday. For example, the day name for the date 12/07/2016 is Wednesday.
function getDayName(dateString) {
  let dayName;
  // Write your code here
  var date = new Date(dateString); //convert string to date object so that we can use functions tolocaledatestring on it
  return date.toLocaleDateString("en-US", { weekday: "long" });
}

// Here is the line you're asking about:

// ```js
// return date.toLocaleDateString("en-US", { weekday: "long" });
// ```

// I’ll explain it **very simply, step by step**.

// ---

// # ✅ 1. `date` is a Date object

// Example:

// ```js
// const date = new Date("12/11/2025");
// ```

// So now `date` contains a full date:

// ```
// December 11, 2025
// ```

// ---

// # ✅ 2. `toLocaleDateString("en-US", ...)`

// This converts a Date into a *human-readable string* based on a specific language/region.

// `"en-US"` = English (United States style)

// Examples:

// ```js
// date.toLocaleDateString("en-US")
// → "12/11/2025"
// ```

// ---

// # ✅ 3. `{ weekday: "long" }`

// This is an **options object** telling JavaScript:

// > “Give me ONLY the weekday name.”

// `"long"` → full name
// (`"Monday"`, `"Tuesday"`, `"Wednesday"`, etc.)

// Other options:

// * `"short"` → Mon, Tue, Wed
// * `"narrow"` → M, T, W

// ---

// # ✅ 4. Put it all together

// ```js
// date.toLocaleDateString("en-US", { weekday: "long" })
// ```

// Means:

// > Convert this Date into a string, but instead of the full date, return only the **full weekday name** in English.

// ---

// # Example

// ```js
// const date = new Date("12/11/2025");

// date.toLocaleDateString("en-US", { weekday: "long" });
// ```

// Output:

// ```
// Thursday
// ```

// ---

// # 🔥 In ONE sentence

// **That line takes the Date, formats it using US English rules, and returns the full weekday name (Sunday–Saturday).**

// ---

// If you want, I can explain **how `toLocaleDateString` works internally**, or show examples with different languages like `"hi-IN"` or `"ar-SA"`.
