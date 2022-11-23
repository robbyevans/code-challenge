
// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []





function invert(array){
  let invertedArray=[]
  for (items of array){
    invertedArray.push(items*-1)
  }
  console.log(invertedArray)
}

array=[1,2,3,4,6,-8]
invert(array)