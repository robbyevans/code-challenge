//TASK 6:
//With a given tuple (1, 2, 3, 4, 5, 6, 7, 8, 9, 10),
// write a program to print the first half values in one line and the last half values in one line.


//pseudocode

//1.save the tuple in a constant variable
//2.create a function splitTuple that takes the tuple and divides it by half of its length
//3.save 1st half in a new variable and the 2nd half in a separate variable
//4.print the variables


const currentTuple=(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)

function splitTuple(tuple){
  array=[]
  array.push(tuple)
  console.log(array)
}

splitTuple(currentTuple)