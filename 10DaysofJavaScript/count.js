// Objective

// In this challenge, we learn about iterating over objects. Check the attached tutorial for more details.

// Task

// Complete the function in the editor. It has one parameter: an array, , of objects. Each object in the array has two integer properties denoted by  and . The function must return a count of all such objects  in array  that satisfy .

// Input Format

// The first line contains an integer denoting .
// Each of the  subsequent lines contains two space-separated integers describing the values of  and .
function getCount(objects) {
  let i = 0;
  let count = 0;
  for (i = 0; i < objects.length; i++) {
    if (objects[i].x === objects[i].y) {
      count++;
    }
  }
  return count;
}
