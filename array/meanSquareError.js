// const solution = function(firstArray, secondArray) {
//   let firstnum=firstArray[0]-secondArray[0]
//   let secondnum=firstArray[1]-secondArray[1]
//   let thirdnum=firstArray[2]-secondArray[2]

//   let average=((Math.abs(firstnum)**2)+(Math.abs(secondnum)**2)+(Math.abs(thirdnum)**2))/3

//   console.log(average)
// }

// solution([1,2,3,4],[2,5,4,5])

  //examples...

function meanSquare(a,b){
  const n = a.length
  let sum=0

  for(let i=0;i<n;i++){
   sum+=( a[i]+b[i])
  }
  console.log(sum/n)
}

meanSquare([1,2,3,4,5],[6,7,8,9,10])