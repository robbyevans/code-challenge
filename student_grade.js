//TASK 8: 
//Write that prompts the user to input student marks. 
//The input should be between 0 and 100.
// Then output the correct grade: 
//A > 79 , B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40

//pseudocode

//use require prompt to request user input
//save the user input in a constant marks
//create a function grade that takes in marks as an argument and returns the correct corresponding grade letter


const prompt=require("prompt-sync")()

const marks=prompt("Enter your marks?")

function grade(marks){
  if(marks>=79){
    return 'A'
  }
  else if(marks>=60&&marks<79){
    return "B"
  }
  else if(marks>=49&&marks<60){
    return "C"
  }
  else if(marks>=40&&marks<49){
    return "D"
  }
  else return "E"
}

console.log(grade(marks))