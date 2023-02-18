//function to show number of occurence of an element in an array


function occurence(array,item){
  let n=0
  for(let elements of array){
    if (elements===item){
      n+=1
    }
  }
  return n
}

console.log([1,2,3,4,4,4,3],4)