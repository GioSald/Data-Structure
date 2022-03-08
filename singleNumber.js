/*
Given a non-empty array of integers nums, every element 
appears twice except for one. Find that single one.
You must implement a solution with a linear runtime 
complexity and use only constant extra space.
*/

function singleNumber(nums){
    let sorted = nums.sort();
    for(let i = 0; i < sorted.length; i++){
        let sameAsAfter = sorted[i] === sorted[i + 1];
        let sameAsBefore = sorted[i] === sorted[i - 1];
        if(!sameAsAfter && !sameAsBefore) return sorted[i]
    }
}

console.log(singleNumber([1,2,2]));