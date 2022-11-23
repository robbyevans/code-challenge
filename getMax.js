//Implement a program that takes 3 form inputs or from the terminal, and stores them in 
//three variables.
// Return the largest of the three. Do this without using the inbuilt max () function!
//The goal of this exercise is to think about some internals that programs normally take care of for us. 
//Extras:
//If the number is a multiple of 4, display out a different message.


//pseudocode

//1.use require prompt to take users input from the terminal
//2.save the users input in 3 variables.
//2.create a function getMax that returns the largest of the 3 values
//4.if any of the number is a multiple of 4 return a different message


const prompt= require("prompt-sync")()

const firstNUmber=prompt("first Number?")
const secondNumber=prompt("second Number?")
const thirdNumber=prompt("third Number?")


function getMax(first,second,third){
  let numbers=[]
  if ((first||second||third)%4===0){
    return null
  }
  else numbers.push(first,second,third)
  const arranged=numbers.sort(function(a, b){return b - a})
  console.log (arranged[0])
}

getMax(firstNUmber,secondNumber,thirdNumber)