/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {

    if(nums.length <=1)
    return nums.length;
    else
    { for( i = 0 ; i< nums.length ; i++)
    { 
        for( j = i+1 ; j< nums.length ; j++)
            if(nums[i] === nums[j])
            {
                nums.splice(j,1); // remove one item from position j
                --j; //decrement j to reiterate over same position because different value is at that position now
            }
    }
    return nums.length;
    }
};