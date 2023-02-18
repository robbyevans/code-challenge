//pseudocode
//1.create a function called plusMinus that takes an array as argument,
//2.declare an empty variable p,v,z all =0 and a constant n = array.length
//3.iterate over the array ,
//4.check if either the elements in the array are positive,negative or zero using the if statements while adding the respective variables by 1
//5 return the division of the variable with n to 5decimal places



function plusMinus(arr) {
  // Write your code here
  
  const n = arr.length
  let p=0;
  let v=0;
  let z=0;

  for (let i=0;i<n;i++){
    let x=arr[i]
    if(x>0){
     p+=1
  }
  if(x<0){
      v+=1
  }
  else if(x==0){
   z+=1
  }
      
  }
  console.log(
      (p/n).toFixed(5) ,
      (v/n).toFixed(5),
      (z/n).toFixed(5)
  )
  
  

}

plusMinus([1,2,3,-5,-2,0])