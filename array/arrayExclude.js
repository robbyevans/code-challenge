// function to exclude an element from an array


function except(array,excluded){
  const output=(array.filter(function(x){
     return x!=excluded
   }))
 
   return(output)
 
 }
 
 
   console.log(except([1,2,2,3,4,5,6],2))


   //alternative method
   //function to exclude an element from an array


function exclude(array,n){
  
  let setA=new Set(array)
  setA.delete(n)
  console.log([...setA])
}

exclude([1,2,5,5,3,4,5],5)
 
