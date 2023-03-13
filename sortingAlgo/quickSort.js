
function quickSort(array){
  if(array.length<=1){
    return array
  };

  let pivot=array[0];
  const right=[];
  const left=[];

  for(let i=1;i<array.length;i++){
    if(array[i]<pivot){
      left.push(array[i])
    }
    else{
      right.push(array[i])
    }
  }
  return[...quickSort(left),pivot,...quickSort(right)]
}

console.log(quickSort([5,4,3,2,1]))