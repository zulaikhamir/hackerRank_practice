// Given the meal price (base cost of a meal), tip percent (the percentage of the meal price being added as tip), and tax percent (the percentage of the meal price being added as tax) for a meal, find and print the meal's total cost. Round the result to the nearest integer.
public static void solve(double meal_cost, int tip_percent, int tax_percent) {
    // Write your code here
    double tip= (tip_percent/100.0)*meal_cost;
    double tax=(tax_percent/100.0)*meal_cost;

    double total=meal_cost+tip+tax;
    int roundtotal=(int)Math.round(total);
  System.out.println(roundtotal);
    }
