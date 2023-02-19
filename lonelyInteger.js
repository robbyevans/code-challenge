//Given an array of integers, where all elements but one occur twice, find the unique element.

//Example 
  //a=[1,2,3,4,3,2,1]
//The unique element is 4 .

//Function Description

//pseudocode

//1.define a function lonelyInteger that takes an array of integers
//2.iterate over  the array to find the number of occurence of each item in the array
//3.return the element that occurs only once

//soln

//Javascript program to find the array element
// that appears only once
 
    // Function to find the
    function findSingle(array){
 
      // Iterate over every element
      for (let i = 0; i < array.length; i++) {
   
          // Initialize count to 0
          let count = 0;
   
          for (let j = 0; j < array.length; j++) {
   
              // Count the frequency
              // of the element
              if (array[i] == array[j]) {
                  count++;
              }
          }
   
          // if the frequency of the
          // element is one
          if (count == 1) {
              return array[i];
          }
      }
   
      // if no element exist at most once
      return -1;
  }
   
  // Driver code
  ;
  console.log(findSingle([ 2,2, 3,1, 5, 4, 5, 3, 4 ]))