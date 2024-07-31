module.exports = function reverse (n) {

    n = String(Math.abs(n));
  
   
  
    let numberTransformed = '';
  
    for (let i = n.length-1; i >=0; i--) {
  
        numberTransformed = numberTransformed + n[i];
  
    }
  
    n = Number(numberTransformed);
  
   
  
    return n;
  
}

