/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if(n <4) //we use fibonacci series for this , fibonacci numbers will be different from n only after 3
    return n;
    
   let fib = [1,1]; //starting values of the series for i = 0 and i = 1
   for(let i =2 ; i<=n ; i++) //loop from i = 2 till n
   {
       fib[i] = fib[i-1] + fib[i-2]; //fibonacci formula
   }
    return fib[n];
    
};