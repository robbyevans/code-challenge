//diagonal difference



let array1=[
  [1,2,3],
  [4,5,6],
  [7,8,9],
]

const diagonalDifference=(array)=>{
  let rightDiagonal=0;
  let leftDiagonal=0;

  for(let i=0;i<=array.length-1;i++){
    rightDiagonal+=array[i][i]
    leftDiagonal+=array[i][array[i].length-1-i]
  }
  console.log(rightDiagonal)
  console.log(leftDiagonal)
}

diagonalDifference(array1)