//write a function that takes in 2 numbers and returns the max of the two

const prompt=require("prompt-sync")()

const first=prompt("first number?")
const second=prompt("second number?")

function getMax(first,second){
  return(first>second)?first:second;
}

console.log(getMax(first,second))
