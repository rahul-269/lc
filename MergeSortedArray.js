/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let j = 0; //position for nums2 elements
   for(i = 0; i<m+n ; ++i) //m+n is the loop length
   {
     if(i >= m && nums1[i]===0 && j<n) // should be greater than m for the extra zeroes, j should be less than n to prevent unnecessary increments
     {
         nums1[i]= nums2[j];
         j++;
     }
   }
   nums1.sort((a, b)=>{return a - b});//sort numbers in ascending order using compare function
};