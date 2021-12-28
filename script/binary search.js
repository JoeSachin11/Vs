function binarySearch(sortedArray,key){
    let begin = 0;
    let end = sortedArray.length-1;

    while(begin<=end){
    let middle = Math.floor((begin + end) /2);

    if(sortedArray[middle]<key)
    {
    begin = middle+1;
   
    }
    else if( sortedArray[middle] > key){
       end = middle-1;
    }
    else {
        return middle;
    }
}
    
        return "NOT FOUND";

    
}
console.log(binarySearch([21,34,56,76,87,98],76));