/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if(s.length<=1) //single bracket or no bracket is false
    return false
    else{
    let bstack = [];  //we use stack because last in first out
    for( i = 0 ; i < s.length ; i++)
    {
        if(s[i]=== '[')
        bstack.push(']')  //we push the opposite because it simplies comparison later since they are meant to be pairs
        else if(s[i]=== '(')
        bstack.push(')')
        else if(s[i]=== '{')
        bstack.push('}')
        else if(bstack.pop() !== s[i]) //if the bracket pair last pushed into the stack doesnt match the bracket at current position of i it is false
            return false;
    }

    if(bstack.length === 0) //at the end stack will be empty if all brackets were in pairs so true
    return true;
    else
    return false;
  } 
};