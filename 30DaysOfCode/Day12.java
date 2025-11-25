// Task
// You are given two classes, Person and Student, where Person is the base class and Student is the derived class. Completed code for Person and a declaration for Student are provided for you in the editor. Observe that Student inherits all the properties of Person.

// Complete the Student class by writing the following:

// A Student class constructor, which has  parameters:
// A string, .
// A string, .
// An integer, .
// An integer array (or vector) of test scores, .
// A char calculate() method that calculates a Student object's average and returns the grade character representative of their calculated average:
// Grading.png

// Input Format

// The locked stub code in the editor reads the input and calls the Student class constructor with the necessary arguments. It also calls the calculate method which takes no arguments.

// The first line contains , , and , separated by a space. The second line contains the number of test scores. The third line of space-separated integers describes .

// Constraints

// Output Format

// Output is handled by the locked stub code. Your output will be correct if your Student class constructor and calculate() method are properly implemented.

// Sample Input

// Heraldo Memelli 8135627
// 2
// 100 80
// Sample Output

//  Name: Memelli, Heraldo
//  ID: 8135627
//  Grade: O
// Explanation

// This student had  scores to average:  and . The student's average grade is . An average grade of  corresponds to the letter grade , so the calculate() method should return the character'O'.

// Language
// Java 8
// More
// 567891011121314151617181920212223242526272829
//     /*
//     *   Method Name: calculate
//     *   @return A character denoting the grade.
//     */
//     // Write your method here
//        public char calculate() {
//         int sum = 0;
//         for (int score : testScores) {
//             sum += score;
//         }

// 3class Person {
// Line: 45 Col: 30

// Test against custom input
// Days of Code
// You have earned 30.00 points!
// You are now 2 challenges away from the 3rd star for your 30 days of code badge.
// 75%13/15
// Congratulations
// You solved this challenge. Would you like to challenge your friends?Share on FacebookShare on TwitterShare on LinkedIn

// Test case 0

// Test case 1

// Test case 2

// Test case 3

// Test case 4

// Test case 5

// Test case 6

// Test case 7
// Compiler Message
// Success
// Input (stdin)
// Heraldo Memelli 8135627
// 2
// 100 80
// Expected Output
// Name: Memelli, Heraldo
// ID: 8135627
// Grade: O


class Student extends Person {
    private int[] testScores;

    // Constructor
    Student(String firstName, String lastName, int id, int[] scores) {
        super(firstName, lastName, id);  // call Person constructor
        this.testScores = scores;        // store test scores
    }

    // Calculate grade based on average score
    public char calculate() {
        int sum = 0;
        for (int score : testScores) {
            sum += score;
        }

        int avg = sum / testScores.length;  // compute average

        if (avg >= 90 && avg <= 100) return 'O';
        else if (avg >= 80) return 'E';
        else if (avg >= 70) return 'A';
        else if (avg >= 55) return 'P';
        else if (avg >= 40) return 'D';
        else return 'T';
    }
}
