//find the number of pairs in the array

function sockMerchant(n, ar) {
  let pairs = 0;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (ar[i] === ar[j]) {
        pairs++;
        ar.splice(j, 1);
        n--;
        j--;
        break;
      }
    }
  }
  return pairs;
}
