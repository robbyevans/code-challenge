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
const limit = prompt('input any number?');

// function oddEven(limit){
//   for(let i=0;i<=limit;i++){
//     if (i%2===0){
//       console.log(`${i} Even`)
//     }
//     else console.log(`${i} Odd`)
//   }
  
// }

function oddEven(limit){
  for(let i=0;i<=limit;i++){
    const message=(i%2===0)?'Even':'Odd'
    console.log(i,message)
  }
}

oddEven(limit)
