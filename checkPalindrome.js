//How will you verify a words as palindrome
function checkPalindrome(str){
    return str === str.split('').reverse().join('')
}

console.log(checkPalindrome('ana'));

//Two

function isPalindrome(str){
    let len = str.length;

    for(let i = 0; i < len / 2; i++){
        if(str[i] !== str[len - 1 - i]){
            return false
        }
    }
    return true
}