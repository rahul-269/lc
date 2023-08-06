/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    nums.sort((a,b)=> a-b); //sort it ascending
    let i = 0;
    let j = nums.length;
    while(i<j)
    {
    if(nums[i]!==nums[i+1])
    return nums[i];
    i = i+2; //increment by 2 
    }
};