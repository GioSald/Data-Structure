/*
Given two strings, write a method to decide
if one is a permutation of the other
*/

function checkPermut(stringOne, stringTwo){
    if(stringOne.length !== stringTwo.length){
        return false
    } else {
        let sortedStringOne = stringOne.split('').sort().join('')
        let sortedStringTwo = stringTwo.split('').sort().join('')
        return sortedStringOne === sortedStringTwo
    }
}

console.log(checkPermut("aba", "aab"));
