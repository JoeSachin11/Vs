let bubbleSort = (arr) =>{
    n=arr.length;
    for(i=0;i<n-1;i++){
        for(j=0;j<=n-i-1;j++){
            if(arr[j]>arr[j+1]){
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]];
            }
        }
    }
    return arr;

}
console.log(bubbleSort([45,23,86,41,67,86,49,90,76,]));


// **********************************************************

let optimizedBubbleSort = (arr) => {
    let n = arr.length;
    
    let swapped = false;
  
    for(let i = 0; i < n - 1; i++){
      for(let j = 0; j <= n - i - 1; j++){
    
          if(arr[j] > arr[j+1]){
            [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
            swapped = true;
          }
      }
   
      if(!swapped){
        break;
      }
    }
    
    return arr;
  }
  console.log(bubbleSort([45,23,86,41,67,86,49,90,76,]));

  