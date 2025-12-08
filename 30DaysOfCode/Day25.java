// Task
// A prime is a natural number greater than  that has no positive divisors other than  and itself. Given a number, , determine and print whether it is  or .

// Note: If possible, try to come up with a  primality algorithm, or see what sort of optimizations you come up with for an  algorithm. Be sure to check out the Editorial after submitting your code.

// Input Format

// The first line contains an integer, , the number of test cases.
// Each of the  subsequent lines contains an integer, , to be tested for primality.

// Constraints

// Output Format

// For each test case, print whether  is  or  on a new line.

// Sample Input

// 3
// 12
// 5
// 7
// Sample Output

// Not prime
// Prime
// Prime
// Explanation

// Test Case 0: .
//  is divisible by numbers other than  and itself (i.e.: , , , ), so we print  on a new line.

// Test Case 1: .
//  is only divisible  and itself, so we print  on a new line.

// Test Case 2: .
//  is only divisible  and itself, so we print  on a new line.
import java.io.*;
import java.util.*;

public class Solution {

    public static void main(String[] args) {
        // Read input from STDIN
        Scanner sc = new Scanner(System.in);

        // Number of test cases
        int t = sc.nextInt();

        // Process each number
        while (t-- > 0) {
            long n = sc.nextLong();

            // Check primality and print result
            if (isPrime(n)) {
                System.out.println("Prime");
            } else {
                System.out.println("Not prime");
            }
        }

        sc.close();
    }

    // Function to check whether a number is prime
    static boolean isPrime(long n) {
        // Numbers ≤ 1 are not prime
        if (n <= 1) return false;

        // 2 is the only even prime number
        if (n == 2) return true;

        // Any even number greater than 2 is not prime
        if (n % 2 == 0) return false;

        // Only check divisors up to sqrt(n)
        long limit = (long) Math.sqrt(n);

        // Check only odd divisors (3, 5, 7, ...)
        for (long i = 3; i <= limit; i += 2) {
            // If divisible by any number, it's not prime
            if (n % i == 0) return false;
        }

        // No divisors found → number is prime
        return true;
    }
}


// ✅ Goal

// For each number n, print:

// Prime

// Not prime

// ✅ Key Time-Complexity Idea

// A naive check goes from 2 → n-1 → O(n) (too slow).

// A better check only goes from 2 → √n → O(√n), because:

// If n = a × b, at least one of the numbers a or b must be ≤ √n.
// So if no divisor ≤ √n exists → n is prime.

// ✅ Rules for primality

// n ≤ 1 → Not prime

// n == 2 → Prime

// n % 2 == 0 → Not prime

// Check odd numbers from 3 to √n
