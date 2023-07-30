/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    for ( i = 0 ; i < nums.length ; i++)
    if(nums[i]===target || target<nums[i]) // if you find the target or the position for it before the end of the array , condition is true
    return i;
    
    return nums.length; //if its the last addition to the array return this as it will always be the length of nums
};