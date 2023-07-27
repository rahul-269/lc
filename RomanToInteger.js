/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {

    let value = 0;
    if(s.length === 1)
    {
        if( s === "I")
        {
            value = value + 1;
        }
        else if( s === "V")
        {
            value = value + 5;
        }
        else if( s === "X")
        {
            value = value + 10;
        }
        else if( s === "L")
        {
            value = value + 50;
        }
        else if( s === "C")
        {
            value = value + 100;
        }
        else if( s === "D")
        {
            value = value + 500;
        }
        else
        {
            value = value + 1000;
        }
    }

    else { 
        for( i  = s.length-1 ; i >= 0 ; --i)
        {
            if( s[i] === "I")
        {   if(s[i+1]==="V" || s[i+1]==="X")
            value = value - 1;
            else
            value = value + 1;
        }
        else if( s[i] === "V")
        {
            value = value + 5;
        }
        else if( s[i] === "X")
        {
            if(s[i+1]==="L" || s[i+1]==="C")
            value = value - 10;
            else
            value = value + 10;
        }
        else if( s[i] === "L")
        {
            value = value + 50;
        }
        else if( s[i] === "C")
        {
            if(s[i+1]==="D" || s[i+1]==="M")
            value = value - 100;
            else
            value = value + 100;
        }
        else if( s[i] === "D")
        {
            value = value + 500;
        }
        else
        {
            value = value + 1000;
        }   
        }
    }

    return value;
    }