// Given a base- integer, , convert it to binary (base-). Then find and print the base- integer denoting the maximum number of consecutive 's in 's binary representation. When working with different bases, it is common to show the base as a subscript.

// Example

// The binary representation of  is . In base , there are  and  consecutive ones in two groups. Print the maximum, .

// Input Format

// A single integer, .

// Constraints

// Output Format

// Print a single base- integer that denotes the maximum number of consecutive 's in the binary representation of .

// Sample Input 1

// 5
// Sample Output 1

// 1
// Sample Input 2

// 13
// Sample Output 2

// 2
// Explanation

// Sample Case 1:
// The binary representation of  is , so the maximum number of consecutive 's is .

// Sample Case 2:
// The binary representation of  is , so the maximum number of consecutive 's is .

import java.io.*;
import java.util.*;

public class Solution {
    public static void main(String[] args) throws IOException {
        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));

        int n = Integer.parseInt(bufferedReader.readLine().trim());
        bufferedReader.close();

        // Convert to binary string
        String binary = Integer.toBinaryString(n);

        int maxCount = 0;
        int currentCount = 0;

        // Count consecutive 1s
        for(char c : binary.toCharArray()) {
            if(c == '1') {
                currentCount++;
                if(currentCount > maxCount) {
                    maxCount = currentCount;
                }
            } else {
                currentCount = 0;  // reset when 0 appears
            }
        }

        // Print result
        System.out.println(maxCount);
    }
}




// Let’s dry run it for:

// Example: n = 13

// Binary of 13 → "1101"

// So the loop goes through each character of "1101".

// Variables used

// maxCount → stores the highest number of consecutive 1s

// currentCount → counts the current streak of 1s

// Initially:

// maxCount = 0
// currentCount = 0

// Dry run of the loop
// Binary: 1 1 0 1
// Step 1: first char = '1'
// '1' → increment currentCount
// currentCount = 1
// maxCount = 1 (updated)

// Step 2: second char = '1'
// '1' → increment currentCount
// currentCount = 2
// maxCount = 2  (updated)

// Step 3: third char = '0'
// '0' → reset currentCount
// currentCount = 0
// maxCount = 2  (unchanged)

// Step 4: fourth char = '1'
// '1' → increment currentCount
// currentCount = 1
// maxCount = 2  (still highest)

// End of loop

// Final maxCount = 2

// So the program prints:

// 2

// Summary

// Every time it sees '1', it increases currentCount.

// Every time it sees '0', it resets currentCount to 0.

// maxCount always stores the highest streak found so far.
