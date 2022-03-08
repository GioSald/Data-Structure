/*
 1. Write a recursive function called reverse
    which accepts a string and returns a new string 
    in reverse
*/

function reverse(str){
	if(str.length <= 1) return str;
	return reverse(str.slice(1)) + str[0];

}
console.log(reverse('hola'));

/*
2. Write a recursive function called isPalindrome which returns
   true if the string passed to it is a palindrome
   (reads the same forward and backward). Otherwise it returns False.
*/

function isPalindrome(str){
   if(str.length === 1) return true;
   if(str.length === 2) return str[0] === str[1];
   if(str[0] === str.slice(-1)) return isPalindrome(str.slice(1,-1))
   return false;
}

console.log(isPalindrome('madam'));

/* 
3. Write a recursive function called someRecursive which accepts
   an array and a callback. The function returns true if a single 
   value in the array returns true when passed to the callback.
   Otherwise it returns false.
*/

function someRecursive(array, callback) {
   if (array.length === 0) return false;
   if (callback(array[0])) return true;
   return someRecursive(array.slice(1),callback);
}

/* 
4. Write a recursive function called flatten which accepts
   an array of arrays and returns a new array with all values flattened
*/

function flatten(oldArr){
   let newArr = []
   for(let i = 0; i < oldArr.length; i++){
      if(Array.isArray(oldArr[i])){
         newArr = newArr.concat(flatten(oldArr[i]))
      } else {
         newArr.push(oldArr[i])
      }
   }
   return newArr;
}

/*----------Second Part--------------*/

/*
2.1 Write a recursive function called capitalizeFirst.
    Given an array of strings, capitalize the first letter 
    of each string in the array
    CAPITALIZE WORDS
*/

function capitalizeWords(array){
   if(array.length === 1){
      return [array[0].toUpperCase()]
   }
   let res = capitalizeWords(array.slice(0, -1));
   res.push(array.slice(array.length-1)[0].toUpperCase())
   return res;
}

console.log(capitalizeWords('hola'));

/*
2.2 Write a function called nestedEvenSum. Return the 
    sum of all even numbers in an object which may contain
    nested objects
    NESTED EVEN SUM
*/

function nestedEvenSum(obj, sum=0){
   for(let key in obj){
      if(typeof obj[key] === 'object'){
         sum += nestedEvenSum(obj[key]);
      }else if (typeof obj[key]=== 'number' && obj[key] % 2 === 0) {
         sum += obj[key]
      }
   }
   return sum;
}

/*
2.3 Write a recursive function called capitalizeWords.
    Given an array of words, return a new array containing 
    each  word capitalized.
    CAPITALIZE FIRST
*/

function capitalizeFirst(array){
   if(array.length === 1){
      return [array[0][0].toUpperCase() + array[0].substr(1)];
   }
   const res = capitalizeFirst(array.slice(0, -1));
   const string = array.slice(array.length - 1)[0][0].toUpperCase() +
   array.slice(array.length-1)[0].substr(1);
   res.push(string);
   return res;
}

console.log(capitalizeFirst('hola'));

/*
2.4 Write a function called stringyfyNumbers which takes
    in an object and finds all of the values which are numbers
    and converts them to string. 
    STRINGIFY NUMBERS
*/

function stringifyNumbers(obj) {
   var newObj = {};
   for (var key in obj) {
     if (typeof obj[key] === 'number') {
       newObj[key] = obj[key].toString();
     } else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
       newObj[key] = stringifyNumbers(obj[key]);
     } else {
       newObj[key] = obj[key];
     }
   }
   return newObj;
 }

/*
2.5 Write a function called collectString which accepts an 
    object and returns an array of all the values in the object
    that have a type of string.
    COLLECT STRINGS
*/

function collectStrings(obj) {
   var stringsArr = [];
   for(var key in obj) {
       if(typeof obj[key] === 'string') {
           stringsArr.push(obj[key]);
       }
       else if(typeof obj[key] === 'object') {
           stringsArr = stringsArr.concat(collectStrings(obj[key]));
       }
   }

   return stringsArr;
}