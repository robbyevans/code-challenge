
// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []

//pseudocode

//1.create a function that takes an array of integers
//2.iterate over the array using for of method to get individual elements of the array,
//3.for every element in the array,multiply by -1
//4.push the elements into a new array

//soln




function invert(array){
  let invertedArray=[]
  for (items of array){
    invertedArray.push(items*-1)
  }
  console.log(invertedArray)
}

array=[1,2,3,4,6,-8]
invert(array)