const solution = function(firstArray, secondArray) {
  let firstnum=firstArray[0]-secondArray[0]
  let secondnum=firstArray[1]-secondArray[1]
  let thirdnum=firstArray[2]-secondArray[2]

  let average=((Math.abs(firstnum)**2)+(Math.abs(secondnum)**2)+(Math.abs(thirdnum)**2))/3

  console.log(average)
}

solution([1,2,3,4],[2,5,4,5])