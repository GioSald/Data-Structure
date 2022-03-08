/*
JavaScript has search!
There are many different search methods on
arrays in JavaScript
° indexOf()
° includes()
° find()
°findIndex()
*/

//Linear Search 

function linearSearch(arr, val){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === val){
            return true;
        }
    }
    return false;
}

console.log(linearSearch([20, 44, 50, 2], 44));

//Binary Search
/*
    Binary search is much faster form of search
    Rather than eliminating one element at a time,
    you can eliminate half of the remaining
    elements at time.
    Binary search only works on sorted arrays
*/

/*
    Write a function called binarySearch which accepts
    a sorted array and a value and returns the index at 
    which the values exists. Otherwise, return -1.
*/

/*function binarySearch(arr, elem){
    let start = 0;
    let end = arr.length - 1;
    let middle = Math.floor((start + end) / 2);
    while(arr[middle] !== elem && start <= end){
        if(elem < arr[middle]){
            end = middle - 1;
        } else {
            start = middle + 1
        }
        middle = Math.floor((start + end) / 2);
    }
    if(arr[middle] === elem){
        return middle;
    }
    return -1;
} */

function binarySearch(arr, elem){
    let start = 0;
    let end = arr.length - 1;
    let middle = Math.floor((start + end) / 2);
    while(arr[middle] !== elem && start <= end){
        if(elem < arr[middle]) end = middle - 1;
        else start = middle + 1;
        middle = Math.floor((start + end) / 2);
    }
    return arr[middle] === elem ? middle : -1
}

//Naive String Search 

function naiveSearch(long, short){
    let count = 0;
    for(let i = 0; i < long.length; j++){
        for(let j = 0; j < short.length; j++){
            if(short[j] !== long[i+j]) break;
            if(j===short.length-1) count++;
        }
    }
    return count;
}