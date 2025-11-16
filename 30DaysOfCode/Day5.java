// Given a string,S , of length N  that is indexed from  to , print its even-indexed and odd-indexed characters as  space-separated strings on a single line (see the Sample below for more detail).

// Note: 0  is considered to be an even index.




import java.util.*;

public class Solution {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);   // Create a Scanner to read input

        int t = sc.nextInt();   // Read number of test cases (ex: 2)
        sc.nextLine();          // Consume leftover newline after reading int

        // Loop t times (for each string)
        // t-- > 0 means: run loop while t is positive, then decrease t by 1
        while (t-- > 0) {

            String s = sc.nextLine();   // Read the next string (ex: Hacker)

            String even = "";   // Will store characters at even indexes
            String odd = "";    // Will store characters at odd indexes

            // Loop through each character of the string
            for (int i = 0; i < s.length(); i++) {

                // If index is even → add to even-string
                if (i % 2 == 0) {
                    even += s.charAt(i);
                }
                // If index is odd → add to odd-string
                else {
                    odd += s.charAt(i);
                }
            }

            // Print both strings on one line, separated by a space
            System.out.println(even + " " + odd);
        }
    }
}


// 1. t-- (post-decrement operator)

// This means:

// use the current value of t

// then subtract 1 after using it

// Example:

// t = 2
// t-- → returns 2, then t becomes 1
// t-- → returns 1, then t becomes 0

// 2. t-- > 0 (comparison)

// This means:

// Check if the current value of t is greater than 0,
// then reduce t by 1 after checking.

// So:

// Before Loop	Condition Checks	Condition Result	t after check
// t = 2	2 > 0	true	t = 1
// t = 1	1 > 0	true	t = 0
// t = 0	0 > 0	false	t = –1

// The loop stops.

// 3. Putting it together:

// while (t-- > 0)
// means:

// run this loop t times


// Nothing more.
