function insertionSort(arr){
  for(let i=1;i<arr.length;i++){
    temp=arr[i]
    j=i-1

    while(j>=0 && arr[j]>temp){
      arr[j+1]=arr[j]
      j--
    }
    arr[j+1]=temp
  }
  return arr
}

console.log(insertionSort([1,5,4,3,2]))