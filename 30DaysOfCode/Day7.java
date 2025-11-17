// Today, we will learn about the Array data structure. Check out the Tutorial tab for learning materials and an instructional video.

// Task
// Given an array,A , of N integers, print 's elements in reverse order as a single line of space-separated numbers.

// Example


// Print 4 3 2 1. Each integer is separated by one space.


public class Solution {
    public static void main(String[] args) throws IOException {
        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));

        int n = Integer.parseInt(bufferedReader.readLine().trim());

        List<Integer> arr = Stream.of(bufferedReader.readLine().replaceAll("\\s+$", "").split(" "))
            .map(Integer::parseInt)
            .collect(toList());

           // Print in reverse
        for (int i = n - 1; i >= 0; i--) {
            System.out.print(arr.get(i) + " ");
        }

        bufferedReader.close();
    }
}


    //  // Print in reverse
    //     for (int i = n - 1; i >= 0; i--) {
    //         System.out.print(arr.get(i) + " ");
    //     }

   // List<Integer> cannot use arr[i] (lists use arr.get(i))
