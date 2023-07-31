/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    if(!s)
    return 0;
    else
    {
    let m = s.trim(); //remove white spaces at beginning and end
    if(m.includes(" ") === false || m.length ===1) //if no whitespaces it is a single word so we return length of the string
    return m.length;
    for( i = m.length-1 ; i>0 ; i--)
        if(m[i] === " ")
        return m.length-i-1; //length minus the position of i gives length of last word
  }
};