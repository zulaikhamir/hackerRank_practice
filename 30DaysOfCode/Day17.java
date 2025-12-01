// Write a Calculator class with a single method: int power(int,int). The power method takes two integers,n  and p, as parameters and returns the integer result of . If either  or  is negative, then the method must throw an exception with the message: n and p should be non-negative.
class Calculator{

    int power(int n, int p) throws Exception{


        if(n<0 || p<0){
            throw new Exception("n and p should be non-negative");

        }
        return  (int)Math.pow(n,p);
    }
}
