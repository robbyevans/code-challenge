function arrayDiffVeryFast(a, b) {
  // show me who the best!
  for (let item of a){
    for(let number of b){
      if (item!=number){
        console.log(item) 
      }
    }
  }
}

arrayDiffVeryFast([1,2,3],[5,2,3])