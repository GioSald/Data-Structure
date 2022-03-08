//How would you swap two numbers without using a temporary variable

function swapNumb(a, b){
    console.log('before swap: ','a: ', a, 'b: ', b);
   console.log(b = b - a); 
    console.log(a = a+ b);
    console.log(b = a-b);
    console.log('after swap: ','a: ', a, 'b: ', b);  
  }

  console.log(swapNumb(2,3));