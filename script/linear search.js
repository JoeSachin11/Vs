function linearSearch(key){
    arr = [10,90,56,48,56,20];
    for(i=0;i<arr.length;i++){
        if (arr[i]===key){
        return i;
        }
        


    }
    return "NOT FOUND";
}
console.log(linearSearch(80));

// ****************************************************

function globalLinearSearch(arr, key){
    let results = []
    for(let i = 0; i < arr.length; i++){
        if(arr[i]===key){
            results.push(i)
        }
    }
    
    if(!results){
        return -1
    }

    return results
}

console.log(globalLinearSearch([9,8,45,2,45,3],45));