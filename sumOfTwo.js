//From a unsorted array, check whether there are any two numbers
//that will sum up to a given number

function sumFinder(arr, sum){
    for(let i = 0; i < arr.length; i++){
        for(let j = i + i; j < arr.length; j++){
            if(arr[i] + arr[j] == sum){
                return true
            }
        }
    }
    return false;
}

console.log(sumFinder([6,4,3,2,1,7], 9));