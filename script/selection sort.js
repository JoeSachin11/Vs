let selectionSort = (inputArray) =>{
    let n = inputArray.length;
    for(let i =0;i<n;i++){
        let min = i;
        for(let j=i+1; j<n;j++){
            if(inputArray[j]<inputArray[min]){
                min=j;
            }

        }
        if (min!= i){
            let temp = inputArray[i];
            inputArray[i] = inputArray[min];
            inputArray[min] = temp;
        }
    }
    return inputArray;
}
console.log(selectionSort([45,56,39,97,58,80]));