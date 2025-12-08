// ✅ What the question is asking

// You are given two dates:

// Actual return date – when the book was actually returned.

// Expected return date – the due date.

// You must calculate how much fine the library must charge based on how late the book is.

// ✅ Fine Rules (Very Important)
// 1️⃣ If returned on time or earlier → Fine = 0

// This includes:

// Same day

// Before due date

// Even if earlier month or earlier year

// 2️⃣ If returned late, but in the same MONTH and SAME YEAR → Fine = 15 × (days late)

// Only the day part matters.

// Example:
// Due: 6 June 2015
// Returned: 9 June 2015
// Days late = 9 − 6 = 3
// Fine = 15 × 3 = 45

// 3️⃣ If returned late, but in the same YEAR (month late) → Fine = 500 × (months late)

// Here, days don’t matter.

// Example:
// Due: 6 June 2015
// Returned: 6 August 2015
// Months late = 8 − 6 = 2
// Fine = 500 × 2 = 1000

// 4️⃣ If returned in a later YEAR → Fine = 10000

// Even if only 1 day late into a new year.

// Example:
// Due: 31 December 2015
// Returned: 1 January 2016
// → Fine = 10000

// ✅ Order of checking (VERY IMPORTANT)

// You must check in this order:

// Year late?
// → If year > expected year → fine 10000

// Month late?
// → If year same AND month > expected month → fine = 500 × (months late)

// Day late?
// → If year same AND month same AND day > expected day → fine = 15 × (days late)

// Else → no fine

// ⭐ Example from the question

// Returned: 9 6 2015
// Due: 6 6 2015

// Year same? Yes

// Month same? Yes

// Day late? Yes → 9 > 6

// Days late = 3

// Fine = 15 × 3 = 45

import java.io.*;
import java.util.*;

public class Solution {

    public static void main(String[] args) {
        /* Enter your code here. Read input from STDIN. Print output to STDOUT. Your class should be named Solution. */
        Scanner sc= new Scanner(System.in);

        int d1=sc.nextInt();
        int m1=sc.nextInt();
        int y1=sc.nextInt();


          int d2=sc.nextInt();
          int m2=sc.nextInt();
          int y2=sc.nextInt();


          int fine=0;

          if(y1>y2){
            fine=10000;
          }
          else if(y1==y2 && m1>m2){
            fine= 500*(m1-m2);
          }
          else if(y1==y2 && m1==m2 && d1>d2){
            fine= 15*(d1-d2);
          }
          System.out.println(fine);

    }
}
