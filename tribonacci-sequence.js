//for the following example, create a function tribonacci
//that takes in a signature array and a value n.
//the tribonacci creates a sequence from the array where for the first 3 values of the array
//a forth value is created that is the sum of the first 3 values.The pattern then continues where the fifth value 
//is the sum of the last 3 values in the sequence including the forth value...this continues n times.


function tribonacci(signature,n){
  //your code here
  t=signature
  for (i=0;i<n;i++){
   t.push(t[i]+t[i+1]+t[i+2])

  }
  return t.slice(0,n)
}

let t=[1,3,4,5]
console.log(tribonacci(t,10))

// array=[1,2,3,4,5]

// console.log(array[-1])