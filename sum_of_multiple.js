// const prompt=require("prompt-sync")()
// const limit=prompt("Enter limit?")

// function sum(limit){
//   let total=0
//   for(i=0;i<=limit;i++){
//     if(i%3===0||i%5===0){
//       total+=i
//     }
//   }
//   return total
// }

// console.log(sum(limit))

// ([1, 3, 2, 1], [4, 2, 5, 3, 2])

// function cmp(a, b) { return a - b; }

function solution(A, B) {
    let n = A.length;
    let m = B.length;
   let a= A.sort;
   let b= B.sort;
    let i = 0;
    numbers=[]
    for (let k = 0; k < n; k++) {
        if (i < m - 1 && B[i] < A[k])
            i += 1;
        if (A[k] == B[i])
        numbers<<A[k]
            return A[k];
    }
    return -1;
}