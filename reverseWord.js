//reverse word

function reverseWord(word){
  const wordArray=word.split("");
  const reverseWordArray=wordArray.reverse();
  const reversedWord= reverseWordArray.join("")
  return reversedWord

}

console.log(reverseWord("evans kiprop rutto"))