//factorial

public static int factorial(int n) {

    // Write your code here
    if(n==0){
        return 1;
    }
    else
    if(n==1){
        return n;

    }
    else{
     return n* factorial(n-1);
    }

    }
