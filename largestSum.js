//How would you find the largest sum of any two elements
function topSum(arr) {
  let biggest = arr[0];
  let second = arr[1];
  let len = arr.length;
  let i = 2;

  if(len < 2){
      return null;
  }

  if(biggest < second){
      biggest = arr[1];
      second = arr[0];
  }

  for(i; i < len; i++){
      if(arr[i] > biggest){
          second = biggest;
          biggest = arr[i]
      } else if (arr[i] > second) {
          second = arr[i]
      }
  }
  return biggest + second;
}
