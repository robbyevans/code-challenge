function minMaxSum(arr) {
  // Write your code here
  const max =Math.max(...arr)
  const min=Math.min(...arr)
   let sum=0
  for (let i=0;i<arr.length;i++){
    sum+=(arr[i])
  }

  console.log(sum-min,sum-max)
}

minMaxSum([1,2,5,14,19])