function flipBitsAndConvertToDecimal(num) {
  let binaryString = num.toString(2).padStart(32, '0'); // convert to binary string and pad with leading zeros
  let flippedBinaryString = '';
  for (let i = 0; i < binaryString.length; i++) {
    if (binaryString[i] === '0') {
      flippedBinaryString += '1'; // flip 0 to 1
    } else {
      flippedBinaryString += '0'; // flip 1 to 0
    }
  }
  let flippedDecimal = parseInt(flippedBinaryString, 2); // convert flipped binary string back to decimal
  return flippedDecimal;
}
