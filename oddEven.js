//Prompt the user for a number either on a form input or the terminal. 
//Depending on whether the number is even or odd,
// display either “odd” or “even” to the user.
// Hint: how does an even / odd number react differently when divided by 2?

//solution 

//require prompt-sync to allow input of values on the terminal
//create a function oddEven that takes in a number and returns a string 'odd' or 'even' depending on 
//the number.
//prompt the user to enter any number on the terminal
//call the function on the number.

const prompt = require('prompt-sync')();

function oddEven(number){
  if (number%2===0)
    return("even")
  
  else return("odd")
}
const input = prompt('input any number?');

console.log (oddEven(input))
