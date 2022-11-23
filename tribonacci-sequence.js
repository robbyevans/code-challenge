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