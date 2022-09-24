//TASK 9: 
//Write a program that takes the age in years and returns the age in days. 
//Use 365 days as the length of a year for this challenge as we would like to ignore leap years. Only accept positive numbers.


//pseudocode

//use require prompt to allow user to enter the value of years in the terminal
//create a function yearsToDays that takes in number of years and returns the number of days


const prompt=require("prompt-sync")()

const years=prompt("Enter Years?")

function yearsToDays(years){
  const days=years*356
  console.log(`${days} days`)
}

yearsToDays(years)