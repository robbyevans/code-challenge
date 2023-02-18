//for an array of integers given, write a function that returns an array without duplicates

//psudocode:
//1.create a function called uniqArray that takes the array as argument
//2.The function uses new Set(array) to return the values of the array that are unique
//3.pass those values to a new array and return the new array


//solution

function uniqArray(array){
  console.log([...new Set(array)])
}

uniqArray([1,1,2,2,3,3,4,4,5,5])


//question

//given two arrays [a] and [b] both of positive integers, write a function called
//uniqueArray that takes both arrays and returns a single array with both values of 
//both arrays without any duplication

//pseudocode

//1.create a function called uniqueArray that takes 2 arrays as arguments,
//2.use the Set method to return unique values of both arrays 
//3 combine both values from the set method using the spread operator and return the values in a single array

function uniqueArray(a,b){
  setA = new Set(a);
  setB = new Set(b);

  console.log([...setA,...setB])
}

uniqueArray([1,1,2,2,3,3],[4,5,6,7,8,9,9])
