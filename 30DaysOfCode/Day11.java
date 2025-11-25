// Context
// Given a  2D Array, :

// 1 1 1 0 0 0
// 0 1 0 0 0 0
// 1 1 1 0 0 0
// 0 0 0 0 0 0
// 0 0 0 0 0 0
// 0 0 0 0 0 0
// We define an hourglass in  to be a subset of values with indices falling in this pattern in 's graphical representation:

// a b c
//   d
// e f g
// There are  hourglasses in , and an hourglass sum is the sum of an hourglass' values.

// Task
// Calculate the hourglass sum for every hourglass in , then print the maximum hourglass sum.

// Example

// In the array shown above, the maximum hourglass sum is  for the hourglass in the top left corner.

// Input Format

// There are  lines of input, where each line contains  space-separated integers that describe the 2D Array .

// Constraints

// Output Format

// Print the maximum hourglass sum in .

// Sample Input

// 1 1 1 0 0 0
// 0 1 0 0 0 0
// 1 1 1 0 0 0
// 0 0 2 4 4 0
// 0 0 0 2 0 0
// 0 0 1 2 4 0
// Sample Output

// 19
// Explanation

//  contains the following hourglasses:

// 1 1 1   1 1 0   1 0 0   0 0 0
//   1       0       0       0
// 1 1 1   1 1 0   1 0 0   0 0 0

// 0 1 0   1 0 0   0 0 0   0 0 0
//   1       1       0       0
// 0 0 2   0 2 4   2 4 4   4 4 0

// 1 1 1   1 1 0   1 0 0   0 0 0
//   0       2       4       4
// 0 0 0   0 0 2   0 2 0   2 0 0

// 0 0 2   0 2 4   2 4 4   4 4 0
//   0       0       2       0
// 0 0 1   0 1 2   1 2 4   2 4 0
// The hourglass with the maximum sum () is:

// 2 4 4
//   2
// 1 2 4


// Here's the clear and simple explanation of why we use:

// int maxSum = Integer.MIN_VALUE;

// ✅ Why do we do this?

// We want to find the maximum hourglass sum.

// But what if all the numbers in the array are negative?

// Example:

// -9 -9 -9 -9 -9 -9
// -9 -9 -9 -9 -9 -9
// -9 -9 -9 -9 -9 -9
// -9 -9 -9 -9 -9 -9
// -9 -9 -9 -9 -9 -9
// -9 -9 -9 -9 -9 -9


// Every hourglass sum will also be negative.

// If we had written:

// int maxSum = 0;


// Then:

// The real answer should be some negative number, like -63

// But maxSum will stay 0, which is WRONG
// (because 0 is bigger than all negative sums)

// ✅ Integer.MIN_VALUE guarantees correctness

// Integer.MIN_VALUE is:

// -2147483648


// The smallest integer Java can store.

// This ensures:

// Any first hourglass sum (even if negative)
// will be greater than Integer.MIN_VALUE

// Thus the first valid hourglass sum will replace it.

// 🎯 Example showing why it is necessary

// Suppose hourglass sums =

// -10, -20, -30, -40

// Case 1 → If you used maxSum = 0
// maxSum starts at 0
// -10 > 0 ? NO
// -20 > 0 ? NO
// -30 > 0 ? NO
// -40 > 0 ? NO

// Final maxSum = 0 ❌ WRONG

// Case 2 → If you used maxSum = Integer.MIN_VALUE
// maxSum starts at -2147483648
// -10 > min ? YES → max = -10
// -20 > -10 ? NO
// -30 > -10 ? NO
// -40 > -10 ? NO

// Final maxSum = -10 ✔️ CORRECT

// ✅ In simple words

// We use:

// int maxSum = Integer.MIN_VALUE;


// because:

// Hourglass sums might be negative

// We want to make sure the first hourglass sum always replaces maxSum

// We want to ensure we find the true maximum, even if it's negative




























import java.io.*;
import java.math.*;
import java.security.*;
import java.text.*;
import java.util.*;
import java.util.concurrent.*;
import java.util.function.*;
import java.util.regex.*;
import java.util.stream.*;
import static java.util.stream.Collectors.joining;
import static java.util.stream.Collectors.toList;



public class Solution {
    public static void main(String[] args) throws IOException {
        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));

        List<List<Integer>> arr = new ArrayList<>();

        IntStream.range(0, 6).forEach(i -> {
            try {
                arr.add(
                    Stream.of(bufferedReader.readLine().replaceAll("\\s+$", "").split(" "))
                        .map(Integer::parseInt)
                        .collect(toList())
                );
            } catch (IOException ex) {
                throw new RuntimeException(ex);
            }
        });

        bufferedReader.close();
        //my code
        int maxSum= Integer.MIN_VALUE;
        // An hourglass starts at row 0-3 and column 0-3
        for(int row=0;row<=3;row++){
            for(int col=0;col<=3;col++){
                // Compute the hourglass sum at this (row, col)
                int sum =
                        arr.get(row).get(col)     + arr.get(row).get(col + 1)     + arr.get(row).get(col + 2) +
                          arr.get(row + 1).get(col + 1) + arr.get(row + 2).get(col) + arr.get(row + 2).get(col + 1) + arr.get(row + 2).get(col + 2);

                if(sum>maxSum){
                    maxSum=sum;
                }

            }

        }

        System.out.println(maxSum);


    }
}
