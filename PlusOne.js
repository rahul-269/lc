/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    a = digits.reverse();
    a[0] = a[0]+1;
    for( i = 0 ; i < a.length ; i++)
    {
        if(a[i]>9 && a.length-1 ===i)
        {
            a[i] = 1;
            a.reverse().push(0);
            return a;
        }
        else if (a[i]>9)
        {
            a[i] = 0;
            a[i+1] = a[i+1]+1;
        }   
    }
    return a.reverse();
};