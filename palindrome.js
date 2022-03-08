/*
Given an String, determine if it is a palindrome,
considering only alphanumeric characters and ignoring
cases.
*/

//Naive Case - Valid Palindrome 
function palindrome(str){
    let strPalindrome = str.split("").reverse().join("")

    if(str === strPalindrome){
        return "It is a palindrome!!"
    } else {
        return "It is not a palindrome!!"
    }
}

console.log(palindrome("madam"));

//Valid Palindrome "While"
function isPalindrome(s){
    s = s.toLowerCase().replace(/[\W_]/g, "");
    let left = 0;
    let right  = s.lenght - 1;

    while(left < right){
        if(s[left] !== s[right]){
            return " It is not a Palindrime"
        }
        left++;
        right--;
    }
    return " It is a Palindrime"
}

console.log(isPalindrome("madam ana lol"));