/* 
1. Write a function called power which accepts a base and an exponent.
The function should retunr the power of the base to the exponent.
POWER SOLUTION
*/

function power(base, exponent){
    if(exponent === 0)return 1;
    return base * power(base,exponent-1);
}

console.log(power(2,3));

/* 
2. Write a function factorial which accepts a number and returns
the factorialof that number.
FACTORIAL SOLUTION
*/

function factorial(x){
    if(x < 0) return 0;
    if(x <= 1) return 1;
    return x * factorial(x-1);
}

console.log(factorial(3));

/* 
3. Write a function called productOfArray which takes in an array
of numbers and returns the product of them all.
PRODUCT OF ARRAY SOLUTION
*/

function productOfArray(arr){
    if(arr.length === 0){
        return 1;
    }
    return arr[0] * productOfArray(arr.slice(1))
}

/* 
4. Write a function called recursie which accepts a number and adds up all
the numbers from 0 to the number passed to the function.
RECURSIVE RANGE SOLUTION
*/

function recursiveRange(x){
    if(x === 0)return 0;
    return x + recursiveRange(x-1)
}

/* 
5. Write a recrusive function called fib which accepts a number and 
returns the nth number in the Fibonacci sequence.
FIBONACCI SOLUTION 
*/

function fib(n){
    if(n <= 2)return 1;
    return fib(n-1) + fib(n2)
}