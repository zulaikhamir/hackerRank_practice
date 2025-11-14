// 🌟 1. What the question actually wants

// You are given a template literal like this:

// sides`The area is: ${A}. The perimeter is: ${P}.`

// And you must write a function:

// function sides(literals, ...expressions) { ... }

// that extracts from the template:

// Area = A

// Perimeter = P

// …and then calculate the original two side lengths of a rectangle.

// Then you must return an array:

// [shorterSide, longerSide]

// Simple mission:
// Convert (Area, Perimeter) back into (side1, side2).

// 🌟 2. The math behind it (very simple)

// Rectangle:

// Area = s1 × s2

// Perimeter = 2(s1 + s2)

// Let:

// A = area
// P = perimeter

// Then:

// s1 + s2 = P / 2
// s1 × s2 = A

// These two values uniquely determine the two sides.

// This is a classic quadratic situation.

// 🌟 3. How tagged template literals work

// When you write:

// sides`The area is: ${A}. The perimeter is: ${P}.`

// JS calls your function like this:

// sides(literalsArray, A, P)

// So inside your function:

// function sides(literals, ...expressions) {
//     // expressions = [A, P]
// }

// You don’t use literals here — we only need A and P.

// 🌟 4. How do we calculate s1 and s2?

// You solve the quadratic equation:

// x² – (P/2)x + A = 0

// Using the quadratic formula:

// x = ((P/2) ± sqrt((P/2)² – A)) / 2

// This gives the two side lengths.

// One will be shorter, one longer.

// 🌟 5. Final correct solution (explained)
function sides(literals, ...expressions) {
  const [area, perimeter] = expressions; // destructuring the expressions array

  // Using P and A
  const s = perimeter; // this is 2(s1 + s2)
  const p = area; // this is s1 * s2

  // Discriminant part of quadratic
  const root = Math.sqrt(s * s - 16 * p); // discriminant part of quadratic

  // Two solutions
  const s1 = (s + root) / 4; // one solution
  const s2 = (s - root) / 4; // other solution

  // shorter first
  return [s2, s1]; // returning the solutions in sorted order
}

// 🌟 6. Putting it all together (story-style)

// The problem gives you area and perimeter wrapped inside a template literal.

// The tagged function receives them as expressions.

// Using old-school rectangle math, you extract the two side lengths.

// You return them in sorted order.

// The platform checks if your computed sides match the original input.
function sides(literals, ...expressions) {
  // Extract area and perimeter from the tagged template literal.
  // expressions[0] = area, expressions[1] = perimeter
  const [area, perimeter] = expressions;

  // 's' represents the perimeter as given: P = 2(s1 + s2).
  // 'p' represents the area: A = s1 * s2.
  const s = perimeter;
  const p = area;

  /*
   * We need to recover the original side lengths s1 and s2.
   * From rectangle formulas:
   *      s1 + s2 = P / 2
   *      s1 * s2 = A
   *
   * This forms the quadratic:
   *      x² - (P/2)x + A = 0
   *
   * The discriminant (the part inside the sqrt) is:
   *      (P/2)² - A = P²/4 - A
   *
   * Multiply by 4 to avoid fractions:
   *      P² - 16A
   *
   * That's exactly what we compute below.
   */
  const root = Math.sqrt(s * s - 16 * p);

  /*
   * Solutions to the quadratic:
   *
   *      x = (P/2 ± sqrt((P/2)² - A)) / 2
   *
   * After simplifying:
   *
   *      x = (P ± sqrt(P² - 16A)) / 4
   *
   * These give the two side lengths.
   */
  const s1 = (s + root) / 4; // longer side
  const s2 = (s - root) / 4; // shorter side

  // Return smaller side first, as required.
  return [s2, s1];
}

// 🌟 1. What a tagged template literal actually does

// When you write:

// sides`The area is: ${A}. The perimeter is: ${P}.`

// JavaScript automatically transforms this call into:

// sides(
//   ["The area is: ", ". The perimeter is: ", "."],  // literals
//   A,                                               // expressions[0]
//   P                                                // expressions[1]
// );

// So the function receives:

// literals → array of string chunks

// Everything outside ${}.

// expressions → array of evaluated values

// Everything inside ${}.

// This question forces you to use:

// function sides(literals, ...expressions)

// so you learn that JS splits the template into:

// literals (strings)

// expressions (values)

// This is the entire point.

// 🌟 2. What the problem forces you to do

// You must write code that uses:

// expressions[0]  → area
// expressions[1]  → perimeter

// This teaches you exactly how tagged template parameters arrive.

// The math is just decoration — a story wrapper to make you process the values.

// 🌟 3. Why the platform uses math instead of a simpler example

// You would not understand why the function needs:

// (literals, ...expressions)

// unless the inputs actually meant something and needed processing.

// If they asked you to return:

// expressions

// …you’d learn nothing.

// So they give you a real-world style problem that forces you to:

// Read values from expressions

// Ignore the string chunks

// Process dynamic inputs

// Return computed output

// It builds intuition for when you’ll later use tagged templates for:

// safe HTML sanitization

// SQL query building

// custom DSLs

// i18n translation wrappers

// string processors

// This is a strategic teaching pattern.

// 🌟 4. The core learning objective

// You are learning:

// ✔ How to define a tag function
// ✔ How JS breaks template strings into literals + expressions
// ✔ How to extract dynamic values from ${}
// ✔ How to process them before returning something

// Everything else (area, perimeter, quadratic formula)
// is just flavor — the poetry wrapped around the mechanic.

// 🌟 5. In one line

// The question teaches you how JS tagged template literals pass their data into a function — the math is just a disguise.
