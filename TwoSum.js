/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {

    let sum = 0;
    let indices =[]; 
    for( i = 0 ; i < nums.length ; i++)
    {
      for ( j = i+1 ; j< nums.length ; j++)
      {
        sum = nums [i] + nums [j];
        if(sum===target)
        {
          indices.push(i);
          indices.push(j);
        }
      }
    }
    
    return indices;
};