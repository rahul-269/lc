/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {

    let sum = 0; // to check if equal to target
    let indices =[]; // array to be populated for return

    for( i = 0 ; i < nums.length ; i++)
    {
      if(i != 0) 
      {
        sum = nums[i]+nums[i-1];
        
        if(sum===target)
        {
        
        indices.push(i-1); // push position of first element into indices array
        indices.push(i); // push position of second element into indices array
        }
      }
    }
    
    return indices;
};