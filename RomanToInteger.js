/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const rsym = { 
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }

    let value = 0;

    for ( i = s.length-1 ; i>=0 ; --i)
    {
       let current = rsym[s[i]];
       let successor = 0;
       if(i+1 <= s.length-1)
       {
         successor = rsym[s[i+1]]; 
       }

       if(current < successor)
       {
           value = value - current;
       }
       else
       value = value + current;

    }
    return value;
};