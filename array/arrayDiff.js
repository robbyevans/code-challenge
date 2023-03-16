//write a function arrayDiff() that takes two arrays as parameters 
//and returns the first array excluding elements that are present in the second array


//pseudocede
//1.create a function called arrayDiff()
//2.the function would take two parameters both arrays.
//3.store the values from both arrays in a set using new Set(array)
//4.delete the elements from the second set in the first set
//5.finally return the remaining values of the first set in an array


function arrayDiff(a, b) {
  // show me who the best!
  const setA= new Set(a)
  const setB = new Set(b)

  
  
  for( elements of setB){
    setA.delete(elements)
  }
 return( Array.from(setA))
}

// arrayDiff([1,2,3,4,5],[7,9,2,1])