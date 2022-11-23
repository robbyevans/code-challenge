const prompt=require("prompt-sync")()
const n=prompt("Enter number?")

function fizzbuzz(n){
  if(n%3===0&&n%5===0){
    let array=[]
    for (let i=1;i<n;i++){
      array.push(i)
    }
  array.push("Fizzbuzz")
    return array
  }
  else if(n%3===0){
    let array=[]
    for (let i=1;i<n;i++){
      array.push(i)
    }
  array.push("Fizz")
    return array
  }
  else if(n%5===0){
    let array=[]
    for (let i=1;i<n;i++){
      array.push(i)
    }
  array.push("buzz")
    return array
  }
  else return n
}

console.log(fizzBuzz(n))

