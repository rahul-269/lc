/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {

    strs.sort(); //sorts array alphanetically
    let output = "";

    if(strs.length===0)
    return output;

    for( i  = 0 ; i < strs[0].length ; i++) // we take the first element of the array and pass through its characters
    {
        for ( j = 1 ; j < strs.length ; j++) // we take the rest of the array and go thru each element
        {
            if( strs[0][i] !== strs[j][i])  //if first element at position i doesnt match the other elements at position i 
            return strs[0].slice(0,i)       // we return the slice of first element that is common in every element
        }
    }
 return strs[0]; //if array contains empty string this returns that
};