//From a unsorted array of numbers 1 to 100
//excluding one number, how will you find that number

function missingNumber(arr){
    let n = arr.length + 1;
    let sum = 0;
    let expectedSum = n * (n + 1) / 2;

    for(let i = 0; i < arr.length; i++){
        sum += arr[i]
    }

    return expectedSum - sum
}