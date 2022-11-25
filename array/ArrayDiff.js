function arrayDiffVeryFast(a, b) {
  // show me who the best!
  const setA= new Set(a)
  const setB = new Set(b)
  
  for( const element of setB){
    setA.delete(element)
  }
  return Array.from(setA)
}