let primeFactor = (num)=> {
  let prime = (num) => {
    for(let i = 2;i<=Math.sqrt(num);i++){
      if(num %i ===0){
        return false;
      }
    }
    return true;
  }
  let result = [];
  for(let i = 2;i<=num; i++)
  {
    while(prime(i) && num%i===0){
      if(!result.includes(i)) result.push(i);
      num/=i;
    }
  }
  return result;
}
let a = 100,b = 382,c=843,d=19556487,e=928;
console.log(primeFactor(d));