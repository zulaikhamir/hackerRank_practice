// Write a Person class with an instance variable, , and a constructor that takes an integer, , as a parameter. The constructor must assign  to  after confirming the argument passed as  is not negative; if a negative argument is passed as , the constructor should set  to  and print Age is not valid, setting age to 0.. In addition, you must write the following instance methods:

// yearPasses() should increase the  instance variable by .
// amIOld() should perform the following conditional actions:
// If , print You are young..
// If  and , print You are a teenager..
// Otherwise, print You are old..
// To help you learn by example and complete this challenge, much of the code is provided for you, but you'll be writing everything in the future. The code that creates each instance of your Person class is in the main method. Don't worry if you don't understand it all quite yet!


public class Person {
    private int age;

	public Person(int initialAge) {
  		// Add some more code to run some checks on initialAge
        if(initialAge>0){
            this.age= initialAge;
        }

        else
       {
        this.age=0;
        System.out.println("Age is not valid, setting age to 0.");
      }
	}

	public void amIOld() {
  		// Write code determining if this person's age is old and print the correct statement:
        if (age < 13) {
            System.out.println("You are young.");
        } else if (age < 18) {
            System.out.println("You are a teenager.");
        } else {
            System.out.println("You are old.");
        }

	}

	public void yearPasses() {
  		// Increment this person's age.
        age++;
	}
