//write a function minMaxSum that takes an array of integers,
//it calculates the sum of items of the array and return the 
//value of the sum minus the max value of the array and the value of the sum minus the min value in the array

//psuedocode
//1. declare a function minMaxSum
//2. it takes an array as parameter
//3. use Math.max and Math.min to find the min and max of the array
//4. iterate over the array to find the sum of elements of array
function minMaxSum(arr) {
  // Write your code here
  const max =Math.max(...arr)
  const min=Math.min(...arr)
   const sum=arr.reduce(function(a,b){
    return (a+b)
  },0)

  console.log(sum-min,sum-max)

  }


minMaxSum([1,2,5,14,19,99])
