function diagonalDifference(arr) {
  let leftDiagonal = 0;
  let rightDiagonal = 0;

  // Loop through the matrix and add up the diagonal elements
  for (let i = 0; i < arr.length; i++) {
    leftDiagonal += arr[i][i];
    rightDiagonal += arr[i][arr.length - 1 - i];
  }

  // Calculate the absolute difference between the two diagonals
  const diagonalDiff = Math.abs(leftDiagonal - rightDiagonal);

  return diagonalDiff;
}


//example

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [9, 8, 9]
];

const diff = diagonalDifference(matrix);

console.log(diff); // Output: 2
