// Objective
// Today, we're working with regular expressions. Check out the Tutorial tab for learning materials and an instructional video!

// Task
// Consider a database table, Emails, which has the attributes First Name and Email ID. Given  rows of data simulating the Emails table, print an alphabetically-ordered list of people whose email address ends in .

// Input Format

// The first line contains an integer, , total number of rows in the table.
// Each of the  subsequent lines contains  space-separated strings denoting a person's first name and email ID, respectively.

// Constraints

// Each of the first names consists of lower case letters  only.
// Each of the email IDs consists of lower case letters ,  and  only.
// The length of the first name is no longer than 20.
// The length of the email ID is no longer than 50.
// Output Format

// Print an alphabetically-ordered list of first names for every user with a gmail account. Each name must be printed on a new line.

// Sample Input

// 6
// riya riya@gmail.com
// julia julia@julia.me
// julia sjulia@gmail.com
// julia julia@gmail.com
// samantha samantha@gmail.com
// tanya tanya@gmail.com
// Sample Output

// julia
// julia
// riya
// samantha
// tanya

import java.io.*;
import java.util.*;
import java.util.regex.*;
import java.util.stream.*;

public class Solution {
    public static void main(String[] args) throws IOException {
        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));

        int N = Integer.parseInt(bufferedReader.readLine().trim());

        List<String> gmailUsers = new ArrayList<>();

        // regex to check gmail address
        Pattern p = Pattern.compile(".*@gmail\\.com$");

        IntStream.range(0, N).forEach(i -> {
            try {
                String[] input = bufferedReader.readLine().replaceAll("\\s+$", "").split(" ");

                String firstName = input[0];
                String emailID  = input[1];

                // match email with Gmail regex
                Matcher m = p.matcher(emailID);
                if (m.matches()) {
                    gmailUsers.add(firstName);
                }

            } catch (IOException ex) {
                throw new RuntimeException(ex);
            }
        });

        bufferedReader.close();

        // sort alphabetically
        Collections.sort(gmailUsers);

        // print result
        for (String name : gmailUsers) {
            System.out.println(name);
        }
    }
}
