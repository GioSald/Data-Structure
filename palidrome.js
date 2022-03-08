/*
Given a string, write a function to ckeck if
it is a permutation of a palidrome
*/

// 
function checkPalidrome(str){
    const arrayValues = str.split('')
    const reverseValues = arrayValues.reverse()
    const reverseString = reverseValues.join('')

    if(str === reverseString){
        console.log('It is a palidrome');
    } else {
        console.log('It is not a palidrome');
    }
}

checkPalidrome('madam')

function palidrome(str){
    let len = str.length
    for(let i = 0; i < len /2 ; i++){
        if(str[i] !== str[len - 1 - i]){
            return 'not a palindrome'
        }
    }
    return 'it is a palidrome'
}

console.log(palidrome('ab'));
