/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    for(i = digits.length-1 ; i>=0 ; --i)
    {
        if(digits[i]<9) //add one if less than 9
        {
            digits[i]++;
            return digits; //break the loop and return here
        }
        else
        digits[i] = 0; //if 9 we make it zero
    }
    digits.unshift(1);//we add one at the beginning of array for the carry over from making 9 as zero
    return digits;//return the new array
};