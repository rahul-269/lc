/**
 * @param {string[]} words
 * @param {character} separator
 * @return {string[]}
 */
var splitWordsBySeparator = function(words, separator) {
    let a=[];

    for(i = 0; i< words.length; i++)
    {
        console.log(i);
        let word = words[i].split(separator);  //split the string in the array using the seperator and put that into an array of substrings
        console.log(word);
        for ( j = 0 ; j< word.length ; j++)
        {
            console.log("second loop at " + j);
            if(word[j].length!=0) //to prevent empty strings in output
            a.push(word[j]); //push every substring into a single array
        }
    }
    return a;
};