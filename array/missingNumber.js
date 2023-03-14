//psuedocode

//1.define a function called solution
//2.create an array with all the numbers
//3.remove all the values of the original array from the new array


array=[1,2,4,5]


function solution(array){

  const max=Math.max(...array)
  const min=Math.min(...array)
  let completeArray=[]

  for(let i=min;i<=max;i++){
    completeArray.push(i)
  }
  // console.log(completeArray)
  let setA= new Set(array)
  let setB= new Set(completeArray)

  for(elements of setA){
    setB.delete(elements)
  }
  
  return [...setB]
}

console.log(solution(array))