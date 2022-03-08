//Given an integer array nums, find the contiguous 
//subarray (containing at least one number) which has 
//the largest sum and return its sum.

var maxSubArray = function(nums) {
    let max = nums[0];
    
    for(let i = 1; i < nums.length; i++){
        const num = nums[i]
        nums[i] = Math.max(num, num + nums[i - 1]);
        max = Math.max(max, nums[i])
    }
    return max;
};