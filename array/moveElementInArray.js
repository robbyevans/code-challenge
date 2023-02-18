//a function that  moves an element of(index) to a new position(offset)
//within the array

function move (array,index,offset){
  const newPos=index+offset
  
  if(newPos>array.length||newPos<0){
    return console.error("invalid offset")
  }
  const item=array[index];
  array.splice(index,1)
  array.splice(newPos,0,item)
  console.log (array)
  }
  
  move([1,2,3,4,5],1,1)