function fizzbuzz(n){
  if(n%3===0 && n%5===0){
    return 'FizzBuzz'
  }
  else if(n%3===0){
    return 'Fizz'
  }
  else{
    return "Buzz"
  }
}

console.log(fizzbuzz(15))