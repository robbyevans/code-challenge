//TASK 12: 
//Write a program called stars.py. It should prompt the user for a number,
// and it should print the number of stars till the number is entered.
//Example If rows are 5, it should print the following:
//*
//**
//***
//****
//*****.

//pseudocode

//1.use require prompt to prompt the user for an input
//2.define function showStar that takes an integer as an argument and returns the number of starts '*'


// const prompt=require('prompt-sync')();

// const stars=prompt('Enter number of stars?');

// function showStar(limit){
//   for(let row=1;row<=limit;row++){
//     let pattern="";
//     for (let i=0;i<row;i++)
//     pattern +="*";
//     console.log(pattern);
//   }
// }

// showStar(stars)

// const prompt=require('prompt-sync')();

// const numbers=prompt('Enter number?');

// function maskify(numbers){
//   return numbers.slice(0, -4).replace(/./g, '#') + numbers.slice(-4);
// }

// console.log(maskify(numbers
//   ))



// function mustify(numbers){
//   array=[]
//   array.push(numbers)
//   if (array.length<=4){
//     return numbers
//   }
//   else 
//   hashed= numbers.slice(0, -4)
//   remaining=numbers.slice(-4)
//   hashed.

// }

// const digits=12345;
// array=[]
// array.push(digits)
// console.log(array.slice(-4))


// function maskify(array) {
//   // If length is greater than 4, then we have things to mask
//   if (array.length > 4) {
//       // reverse string
//       let reversed = reverse(array);
//       let newString = '';
//       for (let i = 0; i < reversed.length; i++) {
//         // if i < 4, we want to reveal these numbers in our output
//         if (i < 4) {
//           newString += reversed[i];
//         } else {
//           // otherwise, just hide it
//           newString += '#';
//         }
//       }
//       // return the reversal of the string to revert it back to original format
//       return reverse(newString);
//   } else {
//       return cc;
//   }
// }
 
// function reverse(str) {
//   return str.split("").reverse().join("");
// }

//maskify
// const prompt=require("prompt-sync")()
// number=prompt("enter number")
// function maskify(number){
//   return number.slice(0, -4).replace(/./g, '#') + number.slice(-4);
// }
// console.log(maskify(number))

const prompt=require ("prompt-sync")()
const number=prompt("number of stars?")

function showStar(number){
  for(i=1;i<=number;i++){
    let pattern='';
    for(j=0;j<i;j++){
      pattern+='*'
    }
    console.log(pattern)
  }
}

showStar(number)