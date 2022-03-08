/* 
Given an array of integers nums and an integer target,
return indices of the two numbers such that they add up 
to target.
*/

 function twoSum(nums, target){
     for(let i = 0; i < nums.length; i++){
         const numberToFind = target - nums[i]
         for(let j = i + 1; j < nums.length; j++ ){
             if(numberToFind === nums[j]){
                 return [i,j]
             }
         }
     }
     return null;
 }

 console.log();