//Write a function that takes in a non empty array of integers 
//sorted in ascending order and returns an array
// with the same length of the squares of the original integers also sorted in ascending order,

//pseudocode

const prompt= require("prompt-sync")()
const numbers=prompt('enter numbers?')
array=[]
array.push(numbers)
function arrange(array){
  squaredArray=[]
  for (items of array){
    squaredArray.push(items**2)
  }
  return squaredArray.sort
}

console.log(arrange(array))



// const squares = (arr) => {
//   let sorted_arr = arr.sort((a, b) => a - b);
//   let squares_arr = sorted_arr.map((num) => num * num);
//   return squares_arr;
// };