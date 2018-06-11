let counter = 0;

function bubbleSort(arr){
  let lastUnsorted = arr.length-1
  // O(n^2)
  while(lastUnsorted>0){
    for(j=0;j<lastUnsorted;j++){
      if(arr[j]>arr[j+1]){
        let first = arr[j]
        arr[j] = arr[j+1];
        arr[j+1] = first;
        counter++
      }
    }
    lastUnsorted--
  }
  console.log(counter)
  return arr
}


