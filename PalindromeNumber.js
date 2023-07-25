/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let holder = 0;
    let sum = 0;
    let original = x;
    if(x<0)
    {return false;}

    else if(x<10)
    {return true;}

    else{
    while(x>0)
    {
        holder = x%10;
        x= (x -holder)/10;
        sum= sum*10 + holder;
        }
        if( original != sum)
        return false;
    }
    return true;
};