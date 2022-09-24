//TASK 10: 
//Write a program that prompts the user to enter the base and height of a triangle
// and returns its area.

//pseudocode
//1.use require prompt to enable user enter values on terminal for both base and height
//2.define a function area that takes the height and base and returns the area of the triangle


const prompt=require("prompt-sync")()

const height=prompt("Enter the height?")
const base=prompt("Enter the base?")

function area(height,base){
  const answer=1/2*height*base
  console.log(answer)
}

area(height,base)
