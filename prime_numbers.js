//TASK 7: 
//Write a program that displays all prime numbers between 1 and 200.
//Hint: A prime number is a number that is divisible by either 1 and itself.

//pseudocode
//1.create a function getPrime that takes in a max number
//2.gets all prime numbers from zero to the max number
//3.returns all the prime numbers 

// function getMax(max){
//   const primeNumbers=[]
//   for(let i=0;i<=max;i++){
//     flag=0
//     for(let j=2;j<i;j++){
//       if (i%j==0){
//         flag=1
//         break
//       }
//     }
//     if(i>1 && flag ==0)
//     primeNumbers.push(i)
//   }
//  console.log(primeNumbers)
// }

// getMax(200)

const prompt=require("prompt-sync")()
const limit=prompt("Enter limit")

function getPrime(limit){
  for(let i=2;i<=limit;i++){
    isPrime=true
    for(j=2;j<i;j++){
      if(i%j===0){
        isPrime=false
      }
    }
    if(isPrime){
      console.log(i)
    }
  }
  
}
getPrime(limit)