/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let reversed = [];
    let regular = [];
    let holder = 0;

    if(x<0)
    {return false;}

    else if(x<10)
    {return true;}

    else{

    while(x>0)
    {
        holder = x%10;
        x= (x -holder)/10;
        console.log(holder,x);
        reversed.push(holder);
        
    }

    console.log(reversed);
    for( i = reversed.length-1 ; i >= 0 ; --i )
    regular.push(reversed[i]);
    console.log(regular);

    for( j = 0 ; j < regular.length ; j++)
    if(regular[j] != reversed[j])
    return false;
    }
    return true;
};