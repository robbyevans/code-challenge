
//tribonacci sequence

//pseudocode

//1.define a function tribonacci that takes a non empty array of integers
//and a value of n
//2.loop over the array while adding the sum of every two corresponding integers 
//3.push the solution of the two integers as the third value to the array till the limit n is reached


//solution

function tribonacci(array,n){
  const outPut=array

  for(let i=0;i<=n;i++){
    sum =array[i]+array[i+1]
    outPut.push(sum)
  }
  return outPut.slice(0,n)
}

console.log(tribonacci([1,2],5))