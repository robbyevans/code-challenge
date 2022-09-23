//Write a program that accepts email as form input or from the terminal. 
//Validate the email by checking if it contains an “@” symbol and “.” symbol. 

//pseudocode

//1.require propmpt for the user to input email address
//2.create a function validateEmail to check if the email contains "@"" and "." and return either
//valid or invalid
//3.Call the function on the input email address


const prompt= require("prompt-sync")()

const email=prompt("input your email?")


function validateEmail(email){
  if (email.includes ("@")&& email.includes(".")){
    console.log("valid Email")
  }
  else console.log("Invalid Email")
}
validateEmail(email)