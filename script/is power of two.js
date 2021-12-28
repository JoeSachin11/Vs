let power_of_2 = (n) =>{
    if(typeof n !== 'number')
    return 'Not A Number';

    return n && (n &(n-1))===0
}
let a = 256,b = 50, c = 64;
console.log(power_of_2(b));
