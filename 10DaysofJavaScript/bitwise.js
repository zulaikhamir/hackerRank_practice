// We define  to be a sequence of distinct sequential integers from  to ; in other words, . We want to know the maximum bitwise AND value of any two integers,  and  (where ), in sequence  that is also less than a given integer, .

// Complete the function in the editor so that given  and , it returns the maximum .

// Note: The  symbol represents the bitwise AND operator.

// Input Format

// The first line contains an integer, , denoting the number of function calls.
// Each of the  subsequent lines defines a dataset for a function call in the form of two space-separated integers describing the respective values of  and .

// Constraints
function getMaxLessThanK(n, k) {
  // If (k-1) OR k is <= n, then answer is k-1
  if (((k - 1) | k) <= n) {
    return k - 1;
  }
  return k - 2;
}

// Here is the question in the **simplest possible way**.

// ---

// # **What they want**

// You are given:

// * A number **n**
// * A number **k**
// * A set/sequence:
//   **S = {1, 2, 3, ..., n}**

// You must choose **two different numbers** from this set:

// ```
// a < b
// ```

// Then calculate:

// ```
// a & b       (bitwise AND)
// ```

// Among ALL possible pairs, you must find:

// * the **maximum value of (a & b)**
// * BUT this value must be **strictly less than k**

// Finally, return that value.

// ---

// # **Example 1**

// Input:

// ```
// 5 2
// ```

// So:

// ```
// n = 5, k = 2
// S = {1, 2, 3, 4, 5}
// ```

// Try all possible (a, b):

// | a | b | a & b |
// | - | - | ----- |
// | 1 | 2 | 0     |
// | 1 | 3 | 1     |
// | 1 | 4 | 0     |
// | 1 | 5 | 1     |
// | 2 | 3 | 2     |
// | 2 | 4 | 0     |
// | 2 | 5 | 0     |
// | 3 | 4 | 0     |
// | 3 | 5 | 1     |
// | 4 | 5 | 4     |

// Now we look for values **< 2**

// Possible: `0, 1, 1, 1, …`

// The maximum is **1**

// So answer = **1**.

// ---

// # **Why is k important?**

// You are NOT allowed to return a value **>= k**.

// For example:
// In the above table, `2` (from 2 & 3) is bigger than `k=2` so it cannot be taken.

// ---

// # **Example 2**

// Input:

// ```
// 8 5
// ```

// S = {1..8}

// We need the biggest value of (a&b) that is **< 5**

// The best possible is **4**

// So output = **4**

// ---

// # **Example 3**

// Input:

// ```
// 2 2
// ```

// S = {1,2}

// Pairs:

// * 1 & 2 = 0

// Only 0 is possible and it is < 2
// So answer = **0**

// ---

// # **Final summary (simple)**

// You must:

// 1. Take all numbers from **1 to n**
// 2. Try all pairs `a<b`
// 3. Compute `a & b`
// 4. Keep only values **< k**
// 5. Return the **maximum** of them

// ---

// If you want, I can also explain the **bitwise trick** that solves this efficiently without loops.

// Let me explain the trick **slowly and clearly**, with ZERO shortcuts.

// ---

// # ✔ What is the goal?

// Find:

// **The biggest value of (a & b)**
// such that:

// * `1 ≤ a < b ≤ n`
// * `(a & b) < k`

// ---

// # ✔ What is the BEST possible value less than k?

// The best value below k is:

// ```
// k - 1
// ```

// Example:
// If k = 5 → best possible value < 5 is 4.

// So we ALWAYS want to check:

// ### **Can any pair (a, b) from 1..n create (a & b) = k - 1 ?**

// If yes → return `k - 1`
// If no → return `k - 2`

// That’s all.

// ---

// # ✔ Why is `k - 1` so important?

// Because `k - 1` is the **highest** number less than k.

// So if ANY pair produces `(a & b) = k - 1`, that must be the answer.

// ---

// # ✔ When can (a & b) = k - 1 happen?

// This is the core logic.

// Let:

// ```
// X = k - 1
// Y = k
// ```

// We want a pair (a, b) such that:

// ```
// a & b = X
// ```

// There is a known bitwise fact:

// A pair exists if this condition is true:

// ```
// (X | Y) <= n
// ```

// Where:

// * `|` is bitwise OR

// ---

// # ✔ Why does `(X | Y) <= n` mean a valid pair exists?

// Because:

// * `X` is the AND result we want
// * `Y` is the next number above X
// * If **both** numbers are ≤ n, they exist inside the set {1..n}

// And ANDING `X` and `Y` always gives `X` because:

// ```
// X = k - 1
// Y = k

// X and Y differ by exactly one bit.
// ```

// So:

// ```
// a = X
// b = Y
// a & b = X
// ```

// But this only works if both numbers are ≤ n.

// So we check:

// ```
// (X | Y) <= n
// ```

// This means both X and Y are possible inside the set.

// ---

// # ✔ Let's do an example

// ### Example: n = 8, k = 5

// ```
// X = k - 1 = 4
// Y = k     = 5
// ```

// Now check:

// ```
// (4 | 5) = 5
// ```

// Is 5 ≤ 8?

// YES → so a pair exists → answer = 4.

// ---

// # ✔ Another example: n = 5, k = 2

// ```
// X = 1
// Y = 2
// (1 | 2) = 3
// ```

// Is 3 ≤ 5?

// YES → answer = 1.

// ---

// # ✔ Example where it FAILS

// n = 2, k = 2

// ```
// X = 1
// Y = 2
// (1 | 2) = 3
// ```

// Is 3 ≤ 2 ?

// NO → impossible
// So answer = `k - 2 = 0`

// ---

// # ✔ Final code

// ```js
// function getMaxLessThanK(n, k) {
//     if (((k - 1) | k) <= n) {
//         return k - 1;
//     }
//     return k - 2;
// }
// ```

// ---

// # ✔ Summary in SIMPLE words

// * Best value < k is `k-1`
// * Check if two numbers in {1..n} can produce AND = `k-1`
// * If yes → answer = `k-1`
// * If not → next best answer = `k-2`

// ---

// If you want, I can give a **visual bit-by-bit explanation** too.
