//How would you verify a prime number?
function isPrime(n){
    let division = 2;

    while (n > division){
        if(n % division === 0){
            return false
        } else {
            division++;
        }
    }
    return true
}

console.log(isPrime(2));
