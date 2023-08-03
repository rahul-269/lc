/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let y = BigInt("0b"+a); //convert the string into number of type bigint
    let x = BigInt("0b"+b);
    let sum = x+y; //add them as numbers with regular addition
    return sum.toString(2); //convert sum to string with base 2 which is binary and then return
};