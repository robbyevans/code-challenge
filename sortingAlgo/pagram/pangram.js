//check if a sentence contains all the letters of  the alphabet

function isPangram(sentence) {
  // Convert the sentence to lowercase and remove any non-letter characters
  sentence = sentence.toLowerCase().replace(/[^a-z]/g, '');
  
  // Create a Set of unique characters in the sentence
  const charSet = new Set(sentence.split(''));

  // Check if the size of the Set is 26 (the number of letters in the alphabet)
  if (charSet.size === 26) {
    return 'pangram';
  } else {
    return 'not pangram';
  }
}


const sentence1 = 'The quick brown fox jumps over the lazy dog';
const sentence2 = 'This is not a pangram';

console.log(isPangram(sentence1)); // Output: 'pangram'
console.log(isPangram(sentence2)); // Output: 'not pangram'
