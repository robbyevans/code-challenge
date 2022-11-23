//TASK 11: 
//Write a program that takes as input the speed of a car e.g 80. 
//If the speed is less than 70, it should print “Ok”. 
//Otherwise, for every 5 km/s above the speed limit (70), 
//it should give the driver one demerit point and print the total number of demerit points.
//For example, if the speed is 80, it should print: “Points: 2”. If the driver gets more than 12 points, the function should print: “License suspended”.


//pseudocode

//1.use require prompt to input speed variable on the terminal
//2.create a function speedCheck that checks if the speed is above or below the speed limit
//3.if the speed is above the speed limit subtract from the speed limit and divide it by 5 to get the points
//4.if the points is above 12,return "licence suspended"

const prompt=require("prompt-sync")()

const speed=prompt("Enter your speed?")

function speedCheck(speed){
  const speedLimit=70
  const points=(speed-speedLimit)/5
  if (points<=0){
    console.log("Ok")
  }
  else if(points>1&&points<12){
    console.log(`${points} demerit points`)
  }
  else console.log("license suspended!!")
}

speedCheck(speed)