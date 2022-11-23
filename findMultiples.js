function findMultiples(integer, limit) {
  //your code here
  let multiples=[]
  for (let i=integer;i<=limit;i++){
    if (i%integer===0){
      multiples.push(i)
    }
  }
  console.log (multiples)
}

findMultiples(2,9)