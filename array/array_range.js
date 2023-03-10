//write a function that generates an array from a
// range (min,max)

const prompt=require("prompt-sync")()
const min=prompt("Enter min?")
const max=prompt("Enter max?")

newArray=[]
function generateArray(min,max){
  for(let i=min;i<=max;i++){
    newArray.push(i)
  }
  console.log(newArray)
}

generateArray(min,max)

//function to show an element exixts in an array

function getElement(array,searchElement){

  
}