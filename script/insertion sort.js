let insertionSort =(inputArray) =>{
    let n = inputArray.length;
    for(let i=1;i<n;i++){
        let current = inputArray[i]
        let j = i-1;
        while((j>-1)&&(current<inputArray[j])){
            inputArray[j+1] = inputArray[j];
            j--;
   }
   inputArray[j+1]= current;
    }
    return inputArray;
}
let inputArray= [50,38,67,54,37,86,47];
console.log(insertionSort(inputArray));