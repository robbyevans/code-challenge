function solution(N) {
  const binary = N.toString(2); // convert N to binary string
  console.log(binary)
  let maxGap = 0;
  let currentGap = 0;
  for (let i = 0; i < binary.length; i++) {
      if (binary[i] === '0') {
          // increment current gap length if we encounter a zero
          currentGap++;
      } else {
          // update max gap length if we encounter a one
          if (currentGap > maxGap) {
              maxGap = currentGap;
          }
          // reset current gap length
          currentGap = 0;
      }
  }
  return maxGap;
}

console.log(solution(32))