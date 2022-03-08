//Count total number of zeros from 1 upto
function countZeros(n){
    let count = 0;
    while(n>0){
        count += Math.floor(n/10);
        n=n/10;
    }
    return count;
}

