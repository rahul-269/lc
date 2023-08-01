/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if(x<=1) //for 0 and 1
    return x;
    else
    {
    for(i= 0 ; i<=x; i++) //loop till value of integer
    if((i*i)>x) //we check if the square of i surpasses x , and if it does we return the previous value of i
    return i-1;
    }
}