//count the number of occurence of an element in the array

function countOccurence(array,n){
  let count=0;

  for(let elements of array){
    if (elements===n){
      count++
    }
  }
  console.log(count)
}

countOccurence([5,1,2,3,4,5,5,5],5)