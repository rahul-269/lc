/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let k = 0;
    for( i = 0 ; i< nums.length ; i++)
    { 
        k = k+1;
        for( j = i+1 ; j< nums.length ; j++)
            if(nums[i] === nums[j])
            {
                nums.splice(j,1);
                --j; 
            }
    }
    return k ;
};