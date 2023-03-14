//Write a function that takes in a non empty array of integers 
//sorted in ascending order and returns an array
// with the same length of the squares of the original integers also sorted in ascending order,

//pseudocode


// array=[]
// array.push(numbers)
function arrange(array){
  squaredArray=[]
  for (items of array){
    squaredArray.push(items**2)
  }
  console.log(squaredArray)
  return squaredArray.sort(function(a,b){return b-a})
}

console.log(arrange([5,4,3,2,1]))



// const squares = (arr) => {
//   let sorted_arr = arr.sort((a, b) => a - b);
//   let squares_arr = sorted_arr.map((num) => num * num);
//   return squares_arr;
// };

array=[1,2,4,5,6]
const max=Math.max(array)
const min=Math.min(array)

let completeArray=[]

for(let i=min;i<=max;i++){
  completeArray.push(i)
}

let setA=new Set (completeArray)
let setB=new Set (array)

for(let elements of setB){
  setA.delete(elements)
  return setA
}