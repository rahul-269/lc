/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    if(nums.length <1) //if nums is empty return length
    return nums.length;
    else{
        h = nums.filter((num)=>{     
           if(num!==val && val!==0) //we filter through the array and get values that are not equal to val in another array h
           return val;
           else if ( val === 0)// if value is 0 we had an issue of it ignoring the filter so when its equal to 0 we return num
           return num;
           });
       for(i = 0 ; i < h.length ; i++)
       nums[i] = h[i]; //replace the positions in num with values from h
       return h.length; //here length of h is what should remain after removing all instances of val
    }
};