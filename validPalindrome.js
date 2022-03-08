/* 
A phrase is a palindrome if, after converting 
all uppercase letters into lowercase letters 
and removing all non-alphanumeric characters, 
it reads the same forward and backward. 
Alphanumeric characters include letters and numbers.
*/

//Easy Way

function palindrome(str){
    return str.split('').reverse().join('');
}

//Palindrome
var isPalindrome = function(s) {
    s = s.toLowerCase().replace(/[\W_]/g, "");
    
    let left = 0;
    let right = s.length - 1;
    
    while (left < right){
        if(s[left] !== s[right]){
            return false;
        }
        left++;
        right--;
    }
    return true
};